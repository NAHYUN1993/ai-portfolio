/* ========================================
   AI Artist Portfolio - Script
   ======================================== */

// ── Project Data ──
const projects = [
  {
    id: 1,
    type: 'video',
    category: 'product',
    categoryLabel: '제품 홍보 영상',
    title: '작물 영양제 기능 홍보 · 네이버 숏클립 커머스 영상',
    desc: '작물 영양제의 핵심 성분과 효능을 직관적으로 시각화하고, 고도화된 프롬프트 엔지니어링을 통해 \'한글 텍스트 깨짐\'을 원천 차단하여 후반 리터칭 없이 상업용 숏폼 에셋을 구축한 커머스 영상.',
    thumbnail: 'images/Thumbnails/작물영양제 기능 홍보.png',
    badge: 'company',
    badgeLabel: '🏢 커머스 프로젝트',
    tools: ['Antigravity', 'Nano Banana', 'Premiere Pro', 'Kling', 'Obsidian'],
    driveId: '1EClMUBheaXkb-DgJTsscnEIPpK80AA0S',
    orientation: 'vertical',
    scenes: [
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_01.png',
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_02.png',
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_03.png',
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_04.png',
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_05.png',
      'images/주요장면/작물영양제기능홍보/작물영양제 주요장면_06.png'
    ],
    tags: ['커머스', '제품 기능'],
    brief: '제품의 성분과 기능(효능)을 모바일 세로형(9:16) 네이버 숏클립 시청 환경에 맞춰 가장 빠르고 직관적으로 전달할 수 있도록 정보 밀도를 높여 기획함. 상업용 커머스 영상에서 가장 중요한 \'제품 패키지와 한글 로고의 정확성\'을 AI 생성 단계에서부터 완벽하게 구현하는 것을 최우선 기술 과제로 설정함.',
    process: [
      { title: '핵심 기능 및 셀링 포인트 기획', desc: '작물 영양제의 특정 영양분과 그것이 작물에 미치는 긍정적 효과를, 네이버 숏클립 시청자의 구매 전환으로 직관적으로 유도할 수 있도록 스토리보드를 구성함.' },
      { title: '한글 왜곡 방어 및 최적화 프롬프트 설계', desc: 'AI 생성 시 필연적으로 발생하는 \'한글 텍스트 왜곡\' 및 \'패키지 형태 일그러짐\' 현상을 방어하기 위해 안티그래비티 환경에서 심층 리서치를 진행함. 제품 패키지의 비율과 한글 타이포그래피를 고정할 수 있는 최적의 프롬프트 구문과 네거티브 프롬프트를 자체 설계함.' },
      { title: '후반 작업 없는 고품질 에셋 생성', desc: '자체 설계한 프롬프트를 나노바나나2 모델에 적용함. 한글 텍스트 및 패키지 왜곡이 전혀 없는 상업용 수준의 고품질 제품 이미지를 한 번에 추출함. 별도의 포토샵 리터칭 없이 상업용 숏폼 에셋으로 즉시 활용 가능하게 하여 생산 효율성을 극대화함.' }
    ],
    toolsDetail: ['Antigravity', 'Nano Banana', 'Adobe Premiere Pro', 'Kling', 'Obsidian']
  },
  {
    id: 2,
    type: 'video',
    category: 'product',
    categoryLabel: '제품 홍보 영상',
    title: '5분 분갈이 챌린지 · 올인원 원예 제품 사용 가이드',
    desc: '복잡한 분갈이 공정을 \'5분 미션\'이라는 게이미피케이션 요소로 재해석하여, 초보자의 심리적 장벽을 낮추고 제품의 올인원 편의성을 극대화한 숏폼 영상.',
    thumbnail: 'images/Thumbnails/분갈이흙2.png',
    badge: 'company',
    badgeLabel: '🏢 커머스 프로젝트',
    tools: ['Nano Banana', 'Photoshop', 'Kling', 'Premiere Pro'],
    driveId: '1kzPULkIVpHz7PnBzJW3cBCNiU-EnxxV8',
    orientation: 'vertical',
    scenes: [
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_01.png',
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_02.png',
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_03.png',
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_04.png',
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_05.png',
      'images/주요장면/5분분갈이챌린지/5분분갈이챌린지 주요장면_06.png'
    ],
    tags: ['가이드', '숏폼'],
    brief: '가드닝 입문자들은 분갈이를 취미가 아닌 복잡하고 실패하기 쉬운 노동으로 인식하는 경향이 있어 이를 해소할 강력한 트리거가 필요함. 제품의 USP인 간편함을 텍스트가 아닌 영상 언어로 증명하기 위해 시간 제한 챌린지 형식을 차용함. "5분이면 충분하다"는 메시지를 시각화하여, 소비자의 페인 포인트인 \'번거로움\'을 즉각적으로 해결하는 솔루션 영상으로 기획함.',
    process: [
      { title: '일관성 확보 및 컷 생성', desc: '캐릭터 시트를 우선 제작하여 컷마다 인물 생김새가 달라지는 AI의 무작위성을 통제함. 확정된 캐릭터 페르소나를 기반으로 분갈이 공정별 주요 장면을 생성함.' },
      { title: '디테일 보정', desc: '생성형 AI 특성상 제품 패키지의 로고나 텍스트가 왜곡되는 현상이 발생하여, 포토샵을 활용한 이미지 합성 및 리터칭으로 왜곡된 제품 영역에 실제 고화질 제품 이미지를 합성함.' },
      { title: '영상화 및 컷 편집', desc: '보정 완료된 이미지를 클링 모델로 생성. 프리미어 프로에서 컷 연결, 스피드 램핑' }
    ],
    toolsDetail: ['Nano Banana', 'Adobe Photoshop', 'Kling', 'Adobe Premiere Pro']
  },
  {
    id: 3,
    type: 'video',
    category: 'seasonal',
    categoryLabel: '시즌 캠페인',
    title: '크리스마스 시즌 캠페인 · 마스코트 토끼',
    desc: '자사 마스코트 토끼 캐릭터에 크리스마스 산타 코스튬을 적용한 시즌 베리에이션을 생성하고, 실제 자사 제품을 정교하게 합성하여 완성도 높은 숏폼 캠페인 필름을 제작함.',
    thumbnail: 'images/Thumbnails/시즌캠페인_크리스마스.png',
    badge: 'company',
    badgeLabel: '🏢 회사 프로젝트',
    tools: ['Nano Banana', 'ComfyUI', 'Kling', 'Premiere Pro'],
    driveId: '1qtkc4js6sA5ZEvdF8BUB8N1gLcI8tB6B',
    orientation: 'vertical',
    scenes: [
      'images/주요장면/크리스마스/크리스마스 주요장면_01.png',
      'images/주요장면/크리스마스/크리스마스 주요장면_02.png',
      'images/주요장면/크리스마스/크리스마스 주요장면_03.png',
      'images/주요장면/크리스마스/크리스마스 주요장면_04.png',
      'images/주요장면/크리스마스/크리스마스 주요장면_05.png',
      'images/주요장면/크리스마스/크리스마스 주요장면_06.png'
    ],
    tags: ['숏폼', '캐릭터 IP'],
    brief: '마스코트 토끼 캐릭터의 IP 가치를 활용하여 시즌에 맞는 브랜디드 콘텐츠를 제작함. AI 기반 캐릭터 생성과 실제 제품 합성을 결합하여, 캐릭터의 아이덴티티를 유지하면서 상업적 완성도를 확보함.',
    process: [
      { title: '캐릭터 시트 및 페르소나 구축', desc: '나노바나나를 활용해 기본 캐릭터 시트를 생성. 다양한 카메라 앵글과 표정 변화에 대응할 시각 에셋을 확보함.' },
      { title: '시즌 베리에이션 및 코스튬 적용', desc: '산타 코스튬 모티프를 적용하여 버전 변형. 캐릭터 고유의 아이덴티티를 완벽하게 유지함.' },
      { title: 'AI 한계 극복 및 제품 합성', desc: 'ComfyUI의 qwen_image_edit 노드를 활용해 캐릭터 영역에 실제 식물 영양제 제품 이미지를 이질감 없이 자연스럽게 합성함.' },
      { title: '모션 부여 및 편집', desc: '프리픽 Kling 모델로 영상화 및 프리미어 프로에서 편집 마무리.' }
    ],
    toolsDetail: ['Nano Banana', 'ComfyUI', 'Freepik (Kling)', 'Premiere Pro']
  },
  {
    id: 4,
    type: 'video',
    category: 'ad',
    categoryLabel: '광고',
    title: 'AI로 다시 태어난 한복, 그리고 한식',
    desc: '단순한 메뉴 나열식 홍보보다는, 브랜드 이름(이도 식당)의 모티브인 \'세종대왕(이도)\'을 화자로 등장시켜 드라마틱한 스토리텔링을 부여. "이름을 도용당해 화가 난 왕이 맛을 보고 감동한다"는 반전 서사 영상.',
    thumbnail: 'images/Thumbnails/공모전_한복한식.png',
    badge: 'contest',
    badgeLabel: '🏆 공모전 출품작',
    tools: ['Midjourney', 'Nano Banana', 'Photoshop', 'Kling'],
    driveId: '1lDDOm36ZfYtygXeCRUZEDgXU_cjzabI0',
    orientation: 'horizontal',
    scenes: [
      'images/주요장면/한복한식/한복한식 주요장면_01.png',
      'images/주요장면/한복한식/한복한식 주요장면_02.png',
      'images/주요장면/한복한식/한복한식 주요장면_03.png',
      'images/주요장면/한복한식/한복한식 주요장면_04.png',
      'images/주요장면/한복한식/한복한식 주요장면_05.png',
      'images/주요장면/한복한식/한복한식 주요장면_06.png'
    ],
    tags: ['사극', '스토리텔링'],
    brief: '브랜드 네이밍에서 출발한 \'세종대왕\' 페르소나와 조선 시대 배경을 통해 한복과 한식의 문화적 가치를 현대적 영상 언어로 재해석함. \'왕이 식당 이름에 분노하다가 맛에 감동한다\'는 반전 내러티브를 중심으로, 시청자의 흥미를 유발하면서 브랜드 메시지를 자연스럽게 전달하는 구조를 설계함.',
    process: [
      { title: '컨셉 아트 및 톤앤매너 기획', desc: '미드저니를 활용해 사극 특유의 웅장하고 고전적인 시대적 배경과 인물 베이스 이미지를 생성함. 시각적 기준점을 설정하고 프로토타이핑을 수행함.' },
      { title: '스토리보드 기반 씬 생성', desc: '사전 기획된 스토리보드 서사에 맞춰 나노바나나 모델로 세부 컷을 생성함. 인물의 앵글과 씬의 연속성을 안정적으로 유지함.' },
      { title: 'AI 한계 극복 및 에셋 합성', desc: '주최측이 요구한 \'특정 한복 패턴과 디테일\' 구현을 위해 포토샵 활용. 마스킹 및 이미지 합성 작업 수행, 의상을 제공 에셋으로 치환하여 시각적 일관성을 확보함.' },
      { title: '모션 부여 및 최종 편집', desc: '프리픽 Kling 모델로 영상화하고, 프리미어 프로에서 오디오 믹싱 등 최종 마스터.' }
    ],
    toolsDetail: ['Midjourney', 'Nano Banana', 'Photoshop', 'Freepik (Kling)', 'Premiere Pro']
  },
  {
    id: 5,
    type: 'video',
    category: 'animation',
    categoryLabel: '단편 애니메이션',
    title: '페어리웜',
    desc: '모녀 갈등과 화해라는 보편적 서사를 판타지 세계관으로 풀어내고, 자체 구축한 \'AI 일관성 빌더(Consistency Builder)\'를 도입해 팀 프로젝트의 이미지 렌더링 리드타임을 혁신적으로 단축한 단편 애니메이션.',
    thumbnail: 'images/Thumbnails/단편애니메이션_페어리웜.png',
    badge: 'team',
    badgeLabel: '👥 팀 프로젝트 (리드)',
    tools: ['Nano Banana', 'Kling', 'ElevenLabs', 'Midjourney'],
    driveId: '1_Ufz9Cl5DFbKYD_R6MPaxhATJ8vLGei5',
    orientation: 'horizontal',
    scenes: [
      'images/주요장면/페어리웜/페어리웜 주요장면_01.png',
      'images/주요장면/페어리웜/페어리웜 주요장면_02.png',
      'images/주요장면/페어리웜/페어리웜 주요장면_03.png',
      'images/주요장면/페어리웜/페어리웜 주요장면_04.png',
      'images/주요장면/페어리웜/페어리웜 주요장면_05.png',
      'images/주요장면/페어리웜/페어리웜 주요장면_06.png'
    ],
    tags: ['오리지널', '판타지'],
    brief: '15세 소녀의 사춘기 갈등과 단절을 이세계 전이라는 메타포로 시각화함. 낯선 세계에서의 조력자 탐험 서사를 거쳐 엄마의 진심을 깨닫고 재회하는 구조. 팀원이 각자 이미지를 생성할 경우 발생하는 캐릭터 불일치를 해결하기 위해, 씬 일괄 생성 파이프라인 구축을 기획함.',
    process: [
      { title: '컨셉 아트 및 톤앤매너 기획', desc: '미드저니를 활용해 메인 캐릭터의 베이스 디자인과 색감 가이드를 수립하여 팀원 간 시각적 합의점을 확보함.' },
      { title: '자동화 파이프라인(빌더) 아키텍처 설계', desc: '구글 AI 스튜디오 환경에서 \'씬 일괄 생성 빌더\'를 자체 구축. 나노바나나 API를 자동 호출하여 씬을 일괄 생성하도록 설계하여, 수동 프롬프트 입력 시간을 생략하고 고품질 에셋을 확보함.' },
      { title: '캐릭터 음성 아이덴티티 및 일관성 확보', desc: '팀원들의 각기 다른 오디오 녹음 소스를 일레븐랩스로 보이스 체인지하여 메인 캐릭터 고유의 음성의 일관성을 확보함.' }
    ],
    toolsDetail: ['Midjourney', 'Nano Banana (API)', 'Kling', 'ElevenLabs', 'Premiere Pro']
  },
  {
    id: 6,
    type: 'video',
    category: 'short-film',
    categoryLabel: '단편 영화',
    title: '개물림사고주의',
    desc: '인간의 탐욕(순혈주의 펫샵)이 부른 좀비 바이러스 사태 속에서, 순수함을 간직한 아이들과 실험체 강아지들이 연대하여 재난을 극복해 나가는 SF 스릴러.',
    thumbnail: 'images/Thumbnails/단편영화_개물림사고주의.png',
    badge: 'team',
    badgeLabel: '👥 팀 프로젝트 (리드)',
    tools: ['Kling', 'Premiere Pro'],
    driveId: '1k3vUbi10fCBuQrny8BzC4N006jmxTZ9h',
    orientation: 'horizontal',
    scenes: [
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_01.png',
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_02.png',
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_03.png',
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_04.png',
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_05.png',
      'images/주요장면/개물림사고주의/개물림사고주의 주요장면_06.png'
    ],
    tags: ['SF', '스릴러'],
    brief: '인간의 이기적 욕망이 초래한 재난 상황 속에서 연대와 극복이라는 메시지를 담았습니다. 총괄 편집 리드로서 분업화된 에셋을 모아 완결된 서사 흐름으로 연출하고, AI의 취약점인 대사 처리를 극복했습니다.',
    process: [
      { title: 'AI 립싱크 구현', desc: 'Kling의 디지털 캐릭터 기능을 적극 활용. 인물 이미지 에셋에 더빙 오디오 소스를 결합하여 캐릭터의 입 모양과 미세한 안면 근육이 자연스럽게 움직이도록 구현함.' },
      { title: '서사 편집 및 사운드 디자인', desc: '팀원들이 분업으로 생성한 대량의 AI 영상·이미지 에셋을 Premiere Pro에서 하나의 완결된 서사 흐름으로 편집하고, 사운드를 디자인함.' }
    ],
    toolsDetail: ['Nano Banana', 'Photoshop', 'Kling', 'Premiere Pro']
  },
  {
    id: 7,
    type: 'video',
    category: 'ad',
    categoryLabel: '광고',
    title: '[UX Visualizing] 토너패드 3-Step 직관적 사용 가이드 및 제품 브랜딩',
    desc: '기존 뷰티 광고의 감성적 클리셰를 배제하고, \'1mm의 빈틈도 허락하지 않는 완벽주의자\'의 시선에서 네모 패드가 얼굴 굴곡에 완벽히 밀착되는 시각적 카타르시스와 3-Step 루틴을 직관적으로 연출한 브랜드 필름.',
    thumbnail: 'images/Thumbnails/공모전_메디힐.png',
    badge: 'contest',
    badgeLabel: '🏆 공모전 출품작',
    tools: ['Midjourney', 'Nano Banana', 'ComfyUI', 'Kling'],
    driveId: '1eSSpwG9XS92l4zofZlsaio4MO2V_PiHY',
    orientation: 'horizontal',
    scenes: [
      'images/주요장면/메디힐/메디힐 주요장면_01.png',
      'images/주요장면/메디힐/메디힐 주요장면_02.png',
      'images/주요장면/메디힐/메디힐 주요장면_03.png',
      'images/주요장면/메디힐/메디힐 주요장면_04.png',
      'images/주요장면/메디힐/메디힐 주요장면_05.png',
      'images/주요장면/메디힐/메디힐 주요장면_06.png'
    ],
    tags: ['브랜드 필름', '뷰티'],
    brief: '주 타겟인 토너패드 입문자들은 정확한 활용법을 인지하지 못해 제품의 효능을 100% 누리지 못하고 있음. 또한, 얼굴의 넓은 면적을 빈틈없이 커버할 수 있는 구조적 형태에 대한 니즈가 존재함. 복잡한 설명을 배제하고, 팩토 → 닦토 → 흡토로 이어지는 3단계 루틴을 직관적 연출함. 네모 패드의 직각 형태가 곡선의 얼굴 면적에 빈틈없이 맞물리는 순간을 강조하여 형태적 당위성을 부여하고, 초심자의 심리적 허들을 낮춤.',
    process: [
      { title: '데이터 분석 및 키워드 충돌 아이데이션', desc: '방대한 뷰티 시장 리서치 자료를 NotebookLM에 학습시켜 인사이트를 신속하게 분석함. 도출된 핵심 키워드를 바탕으로 상충되는 개념을 의도적으로 충돌시키는 크리에이티브 방법론을 통해 \'완벽주의자의 뷰티 오브제\'라는 차별화된 메인 컨셉을 발전시킴.' },
      { title: '톤앤무드 기획 및 캐릭터 페르소나 구축', desc: '미드저니를 활용하여 프로젝트의 톤앤무드를 결정하는 고해상도 컨셉 아트를 생성함. \'완벽주의자\' 캐릭터의 시각적 페르소나를 확립하고, 최적의 레퍼런스를 구축함.' },
      { title: '시각적 일관성 확보 및 씬 생성', desc: '나노바나나를 활용하여 스토리보드의 주요 장면들을 생김새·복장·조명 톤 일관성을 유지하며 생성함.' },
      { title: '다각도 시퀀스 자동화 및 일괄 생성', desc: 'ComfyUI 내에 커스텀 워크플로우를 설계하여 단일 프롬프트 입력만으로 다양한 카메라 앵글 시퀀스를 자동 출력하는 일괄 처리 기능을 구현함.' },
      { title: 'AI 한계 보정 및 브랜드 에셋 합성', desc: '제품 로고 및 텍스트 왜곡 문제를 해결하기 위해 AI 생성 이미지 내 왜곡된 영역에 실제 고화질 제품 에셋을 완벽하게 합성하여 무결성을 확보함.' },
      { title: '이미지 영상화 및 마스터 편집', desc: '이미지를 프리픽 Kling 모델로 영상화. 프리미어 프로에서 컷 연결, 오디오 믹싱, 자막 작업을 진행함.' }
    ],
    toolsDetail: ['Midjourney', 'Nano Banana', 'ComfyUI', 'Freepik (Kling)', 'Photoshop', 'Premiere Pro', 'NotebookLM']
  }
];

const conceptArtFiles = [
  "Generated Image October 22, 2025 - 9_37PM.png",
  "dan_asa_43_--ar_34_--profile_aak7s7r_--v_7_ca0fc045-1541-4fad-b410-635c7f3c14a2_3.png",
  "dan_asa_44_--ar_34_--profile_aak7s7r_--v_7_29add57e-eecf-4e2d-8729-d797ce48c5f6_0.png",
  "dan_asa_44_--ar_34_--profile_aak7s7r_--v_7_29add57e-eecf-4e2d-8729-d797ce48c5f6_1.png",
  "dan_asa_7_--ar_34_--profile_aak7s7r_--v_7_4e4c5394-a791-4896-98c6-00e573cc9ad6_0.png",
  "dan_asa_Dynamic_battle_pose_SD_magical_girl_character._Fancy__1b16abb7-78c8-450b-9af7-349e67deb3f9_1.png",
  "dan_asa_Dynamic_chibi_style_medium_shot._The_girl_scientist_h_a2d9b045-5462-4b80-969b-62c2d3562651_3.png",
  "dan_asa_Medium_shot_dynamic_interaction._3D_illustration._SD__6453d748-2b74-45bd-bd4c-b2e25d8730cc_2.png",
  "dan_asa_Wide_angle_mysterious_and_bizarre_atmosphere._3D_art__63d86714-5964-4d20-b74a-63a23dabec71_0.png",
  "dan_asa_a_woman_exiting_a_night_cafe_motion_blur_on_backgroun_582de1aa-dd57-4e57-9212-305fe0cf0ab1_0.png",
  "u4162569224_An_immense_and_vast_bright_red_minimalist_living__f9ff00a1-d1a0-409a-bd5f-71bd029bb213_3.png"
];

const portraitFiles = [
  "Gemini_Generated_Image_gokefzgokefzgoke.png",
  "dan_asa_4_--ar_34_--profile_aak7s7r_--v_7_4f3a9463-fa4f-4a3e-a0d2-bfd7c01e2cc8_3.png",
  "dan_asa_7_--ar_34_--profile_fej1ho2_--v_7_42cea9d2-ed2a-433f-b252-44046aa6f359_1.png",
  "dan_asa_A_medium_shot_perfectly_symmetrical_whimsical_photogr_1457764e-7a6b-412c-b917-b65e5db1376b_3.png",
  "dan_asa_A_perfectly_symmetrical_whimsical_photograph_with_a_s_d62e1cc0-a914-4345-9290-6fbcb3a3c0dd_3 (1).png",
  "dan_asa_Complete_full_body_shot_of_a_Korean_female_model_stan_35ef9073-316f-497e-a722-2fa7354b16a9_1.png",
  "dan_asa_a_cute_young_woman_shot_from_a_high_angle_with_clean__8af453d2-9d79-4ae4-b5a1-9eaea94b8f17_1.png",
  "dan_asa_httpss.mj.runDK_0qit0QRw_A_giant_marmalade_cats_paw_i_08195733-7c95-4bde-885f-cb10f582e141_1 (1).png",
  "dan_asa_httpss.mj.runInuSrNiW27A_A_medium_shot_perfectly_symm_a1dfaf3e-1593-4a1c-8e42-48e6ada8d0b1_2.png",
  "dan_asa_httpss.mj.runha4QAPybG28_Copy_Block_Full_body_studio__294c1e0c-6a81-4961-9a99-6575ad1fb284_1 (1).png",
  "dan_asa_two_high_school_girls_walking_in_a_school_hallway_one_ff43d0c4-a738-4e42-932b-72b4b8622ea1_0 (2).png",
  "u4162569224_K-beauty_pop-up_opening_event_soft_pink_and_chrom_3aef15e5-74e8-4870-95a8-9eb03b789bc0_1.png",
  "u4162569224_httpss.mj.run6lrl0WpAU4U_Over-the-shoulder_shot_o_d75e6a3b-de41-4cdc-a159-a6d19072fed6_1.png",
  "u4162569224_httpss.mj.runFMK5_73pq_M_Dynamic_advertising_shoo_cdd96ca1-211c-43ee-bebf-13f0a63c2519_3.png",
  "u4162569224_portrait_of_a_young_Korean_influencer_long_straig_adfb86f8-1ea2-46a0-bb54-975a28cd9e70_2.png"
];

const productImageFiles = [
  "dan_asa_Extreme_close-up_macro_shot_of_fingers_spreading_a_th_da1b01db-46dc-4189-b9d9-686358d9f531_2 (1).png",
  "u4162569224_A_round_yellow_skincare_product_in_a_transparent__1019f9b1-edac-4697-a52f-cf01d5c8152f_0.png",
  "u4162569224_A_transparent_glass_jar_of_cream_with_light_pink__ec4a9f45-5dc6-4bd9-a9c2-8cc5a7ccb476_2.png",
  "u4162569224_Close-up_of_a_hand_with_clear_essence_dripping_on_d8131e6c-9416-4c20-ba19-51ec1d38e99e_1.png",
  "u4162569224_The_image_shows_a_girl_sitting_on_the_lid_of_a_ro_6753e44c-62a8-4b9a-9ac3-0fcedd282a9a_1.png",
  "u4162569224_httpss.mj.runY8YVPJb6k0Y_A_tube-shaped_cream_prod_02780557-9b1f-480e-8cec-bfbdc1b78a94_3.png",
  "분갈이흙.png",
  "이지코트.png",
  "자산 1.png",
  "자산 2.png",
  "자산 3.png",
  "퓨어솔루션.png",
  "프리미엄 고형비료.png",
  "프리미엄 복합비료.png"
];

let idCounter = 8;
conceptArtFiles.forEach(file => {
  projects.push({
    id: idCounter++, type: 'image', category: 'concept-art', categoryLabel: '컨셉 아트',
    title: 'Concept Art', desc: '', thumbnail: `images/AI Image/Concept Art/${file}`,
    badge: 'personal', badgeLabel: '✨ AI Image', tools: [], orientation: 'vertical',
    scenes: [], images: [`images/AI Image/Concept Art/${file}`], tags: [], brief: '', process: [], toolsDetail: []
  });
});
portraitFiles.forEach(file => {
  projects.push({
    id: idCounter++, type: 'image', category: 'portrait', categoryLabel: '인물 이미지',
    title: 'Portrait', desc: '', thumbnail: `images/AI Image/Portrait/${file}`,
    badge: 'personal', badgeLabel: '✨ AI Image', tools: [], orientation: 'vertical',
    scenes: [], images: [`images/AI Image/Portrait/${file}`], tags: [], brief: '', process: [], toolsDetail: []
  });
});
productImageFiles.forEach(file => {
  projects.push({
    id: idCounter++, type: 'image', category: 'product-image', categoryLabel: '제품 이미지',
    title: 'Product Image', desc: '', thumbnail: `images/AI Image/Product Image/${file}`,
    badge: 'personal', badgeLabel: '✨ AI Image', tools: [], orientation: 'vertical',
    scenes: [], images: [`images/AI Image/Product Image/${file}`], tags: [], brief: '', process: [], toolsDetail: []
  });
});

// ── Sub-category definitions ──
const subCategories = {
  all: [],
  video: [
    { value: 'all-video', label: '전체 영상' },
    { value: 'ad', label: '광고' },
    { value: 'short-film', label: '단편 영화' },
    { value: 'animation', label: '단편 애니메이션' },
    { value: 'product', label: '제품 홍보' },
    { value: 'seasonal', label: '시즌 캠페인' }
  ],
  image: [
    { value: 'all-image', label: '전체 이미지' },
    { value: 'product-image', label: '제품 이미지' },
    { value: 'portrait', label: '인물 이미지' },
    { value: 'concept-art', label: '컨셉 아트' }
  ]
};

// Placeholder gradients for thumbnails
const placeholderGradients = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  'linear-gradient(135deg, #0c0c1d 0%, #1a237e 50%, #4a148c 100%)',
  'linear-gradient(135deg, #1b1b2f 0%, #162447 50%, #1f4068 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #e94560 100%)',
  'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #3a1c71 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%)',
  'linear-gradient(135deg, #141414 0%, #2c003e 100%)',
  'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
  'linear-gradient(135deg, #1e0533 0%, #110b11 50%, #0b132b 100%)',
  'linear-gradient(135deg, #0b0b0b 0%, #1c1c3c 50%, #2d1b69 100%)'
];

// ── State ──
let currentMainFilter = 'all';
let currentSubFilter = '';

// ── DOM Elements ──
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const filterSub = document.getElementById('filterSub');
const worksGrid = document.getElementById('worksGrid');
const modalBackdrop = document.getElementById('modalBackdrop');
const projectModal = document.getElementById('projectModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBody = document.getElementById('modalBody');

// ── Navigation ──
// Scroll behavior
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
});

// Active section highlight
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// Mobile toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── Filter Logic ──
function initFilters() {
  // Main filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMainFilter = btn.dataset.filter;
      currentSubFilter = '';
      renderSubFilters();
      renderProjects();
    });
  });
}

function renderSubFilters() {
  const subs = subCategories[currentMainFilter];
  if (!subs || subs.length === 0) {
    filterSub.innerHTML = '';
    return;
  }

  filterSub.innerHTML = subs.map((sub, i) => `
    <button class="filter-chip ${i === 0 ? 'active' : ''}" data-sub="${sub.value}">
      ${sub.label}
    </button>
  `).join('');

  // Set default sub filter
  currentSubFilter = subs[0].value;

  // Attach events
  filterSub.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filterSub.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSubFilter = chip.dataset.sub;
      renderProjects();
    });
  });
}

// ── Render Projects ──
function renderProjects() {
  let filtered = projects;

  // Main filter
  if (currentMainFilter !== 'all') {
    filtered = filtered.filter(p => p.type === currentMainFilter);
  }

  // Sub filter
  if (currentSubFilter && !currentSubFilter.startsWith('all')) {
    filtered = filtered.filter(p => p.category === currentSubFilter);
  }

  worksGrid.innerHTML = filtered.map((project, index) => `
    <div class="project-card reveal ${project.orientation === 'vertical' ? 'vertical' : ''}" data-id="${project.id}" style="animation-delay: ${index * 0.08}s">
      <div class="card-thumbnail" ${project.type === 'image' ? `style="border-bottom: none; border-radius: var(--card-radius);"` : ''}>
        <img src="${project.thumbnail || ''}" alt="${project.title}"
             style="${!project.thumbnail ? `background: ${placeholderGradients[project.id - 1] || placeholderGradients[0]};` : ''}">
        <div class="card-type-icon">${project.type === 'video' ? '🎬' : '🖼️'}</div>
        <div class="card-overlay">
          <span class="card-overlay-text">상세 보기 →</span>
        </div>
      </div>
      ${project.type !== 'image' ? `
      <div class="card-info">
        <div class="card-category">${project.categoryLabel}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.desc}</p>
      </div>
      <div class="card-footer">
        <span class="card-badge badge-${project.badge}">${project.badgeLabel}</span>
        <div class="card-tools">
          ${project.tools.slice(0, 2).map(t => `<span class="card-tool-tag">${t}</span>`).join('')}
        </div>
      </div>
      ` : ''}
    </div>
  `).join('');

  // Re-apply reveal animation
  observeRevealElements();

  // Card click events
  worksGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  });
}

// ── Modal ──
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const isVertical = project.orientation === 'vertical';
  const verticalClass = isVertical ? ' vertical' : '';

  let mediaHTML = '';
  if (project.type === 'video' && project.driveId) {
    mediaHTML = `
      <div class="modal-video${verticalClass}">
        <iframe src="https://drive.google.com/file/d/${project.driveId}/preview" 
                allow="autoplay" allowfullscreen></iframe>
      </div>
    `;
  } else if (project.type === 'video') {
    mediaHTML = `
      <div class="modal-video${verticalClass}" style="display:flex; align-items:center; justify-content:center; background: ${placeholderGradients[project.id - 1] || placeholderGradients[0]};">
        <span style="font-size:3rem; opacity:0.5;">🎬</span>
      </div>
    `;
  } else if (project.images && project.images.length > 0) {
    mediaHTML = `
      <div class="modal-gallery ${project.images.length === 1 ? 'single' : ''}">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
      </div>
    `;
  } else {
    mediaHTML = `
      <div class="modal-video" style="display:flex; align-items:center; justify-content:center; background: ${placeholderGradients[project.id - 1] || placeholderGradients[0]}; aspect-ratio: 16/10;">
        <span style="font-size:3rem; opacity:0.5;">🖼️</span>
      </div>
    `;
  }

  // Scene gallery (영상 프로젝트의 주요 장면 6컷)
  let scenesHTML = '';
  if (project.type === 'video' && project.scenes && project.scenes.length > 0) {
    scenesHTML = `
      <div class="scene-gallery">
        <h3 class="scene-gallery-title">주요 장면</h3>
        <div class="scene-grid${verticalClass}">
          ${project.scenes.map((scene, i) => `<img src="${scene}" alt="${project.title} - 장면 ${i + 1}">`).join('')}
        </div>
      </div>
    `;
  } else if (project.type === 'video') {
    // Placeholder scene grid
    scenesHTML = `
      <div class="scene-gallery">
        <h3 class="scene-gallery-title">주요 장면</h3>
        <div class="scene-grid${verticalClass}">
          ${[1,2,3,4,5,6].map(i => `<div style="background: ${placeholderGradients[(project.id + i) % placeholderGradients.length]}; aspect-ratio: ${isVertical ? '9/16' : '16/9'}; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);"></div>`).join('')}
        </div>
      </div>
    `;
  }

  let tagsHTML = '';
  if (project.tags && project.tags.length > 0) {
    tagsHTML = project.tags.map(t => `<span class="card-tool-tag" style="font-size:0.78rem; padding:5px 12px;">${t}</span>`).join('');
  }

  modalBody.innerHTML = `
    <span class="modal-category">${project.categoryLabel}</span>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-badges">
      <span class="card-badge badge-${project.badge}">${project.badgeLabel}</span>
      ${tagsHTML}
    </div>

    ${mediaHTML}

    ${scenesHTML}

    ${project.type !== 'image' ? `
    <div class="modal-section">
      <h3 class="modal-section-title">기획 의도</h3>
      <p>${project.brief}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">작업 과정</h3>
      <div class="process-timeline">
        ${project.process.map(step => `
          <div class="process-step">
            <div class="process-step-title">${step.title}</div>
            <div class="process-step-desc">${step.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">사용 AI 툴</h3>
      <div class="modal-tools">
        ${project.toolsDetail.map(tool => `
          <span class="modal-tool-badge">${tool}</span>
        `).join('')}
      </div>
    </div>
    ` : ''}
  `;

  modalBackdrop.classList.add('active');
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Scroll Reveal Animations ──
function observeRevealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// ── Contact Form (placeholder) ──
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`${name}님, 메시지가 전송되었습니다! (데모 모드)`);
  event.target.reset();
}

// Make handleContactSubmit available globally
window.handleContactSubmit = handleContactSubmit;

// ── Initialize ──
function init() {
  initFilters();
  renderProjects();
  observeRevealElements();
}

document.addEventListener('DOMContentLoaded', init);
