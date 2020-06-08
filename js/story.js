const STORY = ["웨일은 태어나기 전 마음속으로 긴 카운트를 세었습니다. 1년, 2년, 3년, 4년, 그리고 마지막 5년이 되던 날 웨일은 깨어날 준비를 마쳤습니다.",
  "웨일은 아주 차가운 바다에서 태어났지만, 따뜻한 체온을 가진 동물입니다. 웨일의 따뜻함은 주변 수온은 조금 더 올려 놓아 바다친구 모두에게 따뜻함를 전해주곤 합니다.",
  "아기 웨일은 인터넷 환경을 복잡하게하는 브라우저 탭들을 먹고 삽니다. 냠냠.. 웨일의 곁에는 복잡하게 엉킨 브라우저 탭을 보기 어렵습니다. 냠냠..",
  "웨일은 심심할 때가 없습니다. 부모님이 말해주신 이야기, 마음맞는 친구와 떠나는 긴 여정을 상상하기만해도 하루가 후딱 지나가거든요.",
  "웨일은 요새 역할놀이에 푹 빠져있습니다. 웨일이 소중한 친구인 당신에게 필요하다고 생각하는 역할은 끝이 없는 것 같습니다!",
  "뭐가 나올지 모르는 해저에서 필요한 것을 찾아 물 밖까지 건져올리는 것은 웨일이 좋아하는 스포츠입니다.",
  "웨일이 해저에서 건저올린 것을 부모님이 북마크로 만들어주실때면 웨일의 낚시놀이는 토막쌓기놀이로 이어지곤 합니다.",
  "웨일은 종합지능검사 결과 작업기억지수가 만점 이상으로 평가가 불가능하다는 말을 들었습니다. 똑똑한 웨일!",
  "웨일은 여러가지 말을 배우고 있습니다. 매일 매일 한시간씩 꼭꼭 언어공부를 하는 건, 당신과 얘기하기 위해서 입니다.",
  "영혼이 다시 살아 난다고 하는 축제날, 웨일은 흰 식탁보를 덮고 유영하는 것으로 바닷속 콘테스트에서 1등 어린이 상을 받았습니다. 수상소감에서는 당신을 말했다고 합니다.",
  "웨일은 어린이 보부상! 항상 벨리 가방을 가지고 다니며 기억해야할 페이지들을 칸마다 분리보관하고는 합니다. 다 필요한 거 맞죠? 그쵸?",
  "웨일은 언젠가 당신과 함께 이 넓은 바다를 전부 돌아다니기를 꿈꾸고 있습니다.",
  "웨일은 반짝이 가루를 뿌려 색깔을 바꿀 수 있습니다. 반짝반짝 밤하늘의 검정색도 반짝반짝 바다의 하늘색도 반짝반짝 초원의 녹색도 될 수 있다고 합니다.",
  "오늘도 웨일은 더 큰 고래가 되기 위해 브라우저 탭을 먹으며 당신도 더 큰 사람이 될 수 있도록 밥을 꼭꼭 챙겨먹기를 바랐습니다.",
  "웨일은 자신이 있는 바닷 속 오늘의 날씨보다 당신이 있는 곳의 날씨를 궁금해하곤 합니다. 너무 덥거나 춥지않기를.",
  "다른 청소년처럼 웨일도 좋아하는 아티스트가 있습니다. 바닷속 아이돌 '해초와구와구'는 웨일의 영원한 우상입니다.",
  "웨일은 요새 잔소리를 하는 취미를 들였습니다. 할 일을 미루지 않기로 약속해요!",
  "시험 공부하기 힘들 때면 웨일은 당신과 한 미루지 않겠다는 약속을 생각하곤 합니다. 열심히 공부해야죠.",
  "웨일은 태평양부터 대서양까지, 오대양을 돌아다니며 언어를 배우려 합니다. 웨일의 꿈 중 하나는 바닷가의 통역가가 되는 것입니다.",
  "당신이 좋아하는 게 무엇일지 고민하다보면 쉬는시간이 너무 빨리 끝나버리는게 웨일의 최근 고민입니다.",
  "웨일은 당신을 태우고 바다를 이동하는 것을 좋아합니다. 당신은 매번 등에 앉지만, 꼬리도 승차감이 좋을테니 언젠가 앉아보라고 말했습니다.",
  "아무리 웨일과의 수다가 재밌다고 해도 웨일을 타고 이동하면서 정신을 팔다가는 북극해에서 내리게 될 수도 있습니다!",
  "웨일에게 무거울거같다고 걱정하지 않기를 바랍니다. 웨일은 지난 체육 수행평가에서 전부 A+을 받았으니까요.",
  "똑같은 하루가 어디있을까요. 학교일과는 똑같더라도 당신을 만나고 나면 그 날은 웨일의 특별한 하루가 되는 걸요.",
  "웨일은 바닷속 유일하게 반짝이는 존재가 자신이 될 수 없음을 압니다. 단지 당신에게 필요한 빛이 되고 싶어할 뿐입니다.",
  "졸업식날 웨일은 졸업생들을 대표해서 졸업연설을 했습니다. 연설에서는 당신과 떠나는 긴 여정에 대한 이야기를 발표했다고 합니다.",
  "이제 우리는 어디를 향해 같이 가볼까요?"
]
const CURRENT_LEVEL = localStorage.getItem("level")
const NO_WHALE = 5
const LEVEL_SETTING = [0, 3, 8, 15, 26, Infinity]

document.addEventListener("DOMContentLoaded", function() {
  
  renderStoryTitle()
  const isLock = checkStoryLock()
  renderButton(isLock)
  addStoryButtonEvent()

})

function renderStoryTitle() {
  
  const NAME_OF_WHALE = localStorage.getItem("name")
  const target = document.querySelector('#story-title')

  target.insertAdjacentHTML('beforeend', `${NAME_OF_WHALE}의 이야기`)
}

function checkStoryLock() {
  
  const origin = new Array(NO_WHALE).fill(true)
  const result = origin.map( (v, i) => (CURRENT_LEVEL > LEVEL_SETTING[i]) ? false : true )

  return result
}

function renderButton(isLock) {

  const target = document.querySelector('#story-btn-container')
  let buttons = ""

  for(let i = 1; i <= NO_WHALE; i++) {
    const btnImgSrc = isLock[i - 1] ? `img/whale${i}_50px_grey.png` : `img/whale${i}_50px.png`

    buttons += `
      <button class="story-btn" id="story-btn-${i}">
        <img src="${btnImgSrc}" alt="${i}번째 스토리 버튼 이미지" id="story-btn-img-${i}">
      </button>
    `
  }

  target.insertAdjacentHTML('beforeend', buttons)
}

function addStoryButtonEvent() {

  const storyButtonContainer = document.querySelector('#story-btn-container')

  storyButtonContainer.addEventListener('click', (event) => {
    
    const target = event.target

    if(target.tagName === "IMG" || target.tagName === "BUTTON") {
      
      const selectedButtonIndex = target.id.charAt(target.id.length - 1)
      const storyContainer = document.querySelector('#story-container')
      const story = getStory(selectedButtonIndex)

      storyContainer.innerHTML = story
    }
  })
}

function getStory(buttonIndex) {
  
  let story = ``
  
  if(CURRENT_LEVEL <= LEVEL_SETTING[buttonIndex - 1]) {
        
    story = `
      <p class="not-open">
        <img src="/img/ic_locked.png" class="story-lock"><br>
        ${buttonIndex}단계 성장 시 열리는 스토리입니다<br>
        목표를 이루고 웨일을 성장시켜 보세요!
      </p>
    `
  } else {
    for (let i = LEVEL_SETTING[buttonIndex - 1]; i < CURRENT_LEVEL && i < LEVEL_SETTING[buttonIndex]; i++) {
      story += `
        <p class="story-content">
          <b>#${i + 1}번째 이야기</b><br>
          ${STORY[i]}
        </p>
      `
    }
  }

  return story
}
