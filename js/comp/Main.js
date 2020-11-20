import Whale from "./Whale.js";
import TodoList from "./TodoList.js";
import { getLocalStorageItem, setLocalStorageItem, getLocalStorageJSONItem } from "../util/localStorage.js";
import { LEVEL_SETTING } from "../util/constants.js";
import { getDateStr } from "../util/util.js";
import TodoInput from "./TodoInput.js";

export default class Main {
  constructor() {
    this.name = getLocalStorageItem({ key: "name" });
    this.level = getLocalStorageItem({ key: "level" });
    this.todoList = getLocalStorageJSONItem({ key: "todoList", defalutValue: [] });

    this.components = {
      whale: new Whale({
        name: this.name,
        level: this.level,
        whaleStatus: this.getStatus(this.level),
      }),
      todoList: new TodoList({
        todoList: this.todoList,
        onToggleTodo: this.onToggleTodo.bind(this),
        onRemoveTodo: this.onRemoveTodo.bind(this),
      }),
      todoInput: new TodoInput({ onAddTodo: this.onAddTodo.bind(this) }),
    };
  }

  getStatus() {
    for (let i = 0; i < LEVEL_SETTING.length; i++) {
      if (this.level < LEVEL_SETTING[i]) {
        return i;
      }
    }
  }

  setLevel() {
    const numOfFinishedTodo = this.todoList.filter((todo) => todo.finishDate !== null).length;
    let exp,
      level = 0;

    if (numOfFinishedTodo < 9) {
      exp = (((numOfFinishedTodo % 3) / 3) * 100).toFixed(1);
      level = Math.floor(numOfFinishedTodo / 3 + 1);
    } else if (numOfFinishedTodo < 34) {
      exp = ((((numOfFinishedTodo - 9) % 5) / 5) * 100).toFixed(1);
      level = 4 + Math.floor((numOfFinishedTodo - 9) / 5);
    } else if (numOfFinishedTodo < 52) {
      exp = ((((numOfFinishedTodo - 34) % 6) / 6) * 100).toFixed(1);
      level = 9 + Math.floor((numOfFinishedTodo - 34) / 6);
    } else if (numOfFinishedTodo < 108) {
      exp = ((((numOfFinishedTodo - 52) % 7) / 7) * 100).toFixed(1);
      level = 12 + Math.floor((numOfFinishedTodo - 52) / 7);
    } else if (numOfFinishedTodo < 154) {
      exp = ((((numOfFinishedTodo - 108) % 8) / 8) * 100).toFixed(1);
      level = 20 + Math.floor((numOfFinishedTodo - 108) / 8);
    } else {
      exp = (((numOfFinishedTodo - 162) / 10) * 100).toFixed(1);
      level = 27 + Math.floor((numOfFinishedTodo - 162) / 10);
    }

    this.setState({ nextLevel: level, nextExp: exp });
  }

  setState({ nextTodoList, nextLevel, nextExp }) {
    if (nextTodoList) {
      this.todoList = nextTodoList;
      setLocalStorageItem({ key: "todoList", item: nextTodoList });
      this.setLevel();

      this.components.todoList.setState(this.todoList);
    }

    if (nextLevel && nextLevel) {
      this.level = nextLevel;
      this.exp = nextExp;
      setLocalStorageItem({ key: "level", item: nextLevel });
      setLocalStorageItem({ key: "exp", item: nextExp });

      this.components.whale.setState({ nextLevel: this.level });
    }
  }

  onAddTodo(todoText) {
    const nextTodoList = [
      ...this.todoList,
      {
        id: this.todoList.length === 0 ? 0 : this.todoList.length + 1,
        todo: todoText,
        isChecked: false,
        addDate: getDateStr(),
        finishDate: null,
      },
    ];

    this.setState({ nextTodoList });
  }

  onToggleTodo(todoId) {
    const nextTodoList = this.todoList.slice();
    const toggledTodoIndex = nextTodoList.findIndex((todo) => todo.id == todoId);

    nextTodoList.splice(toggledTodoIndex, 1, {
      ...nextTodoList[toggledTodoIndex],
      isChecked: !nextTodoList[toggledTodoIndex].isChecked,
    });

    this.setState({ nextTodoList });
  }

  onRemoveTodo({ todoId, isChecked }) {
    const nextTodoList = this.todoList.slice();
    const removedTodoIndex = nextTodoList.findIndex((todo) => todo.id == todoId);

    if (isChecked) {
      nextTodoList.splice(removedTodoIndex, 1, {
        ...nextTodoList[removedTodoIndex],
        finishDate: getDateStr(),
      });
    } else {
      nextTodoList.splice(removedTodoIndex, 1);
    }

    this.setState({ nextTodoList });
  }
}
