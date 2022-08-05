import React from 'react'
import aboutLogo from '../public/bgAbout.png'
import aboutDescripImg from '../public/bgDescrip.png'
import aboutTeam from '../public/bgTeam.png'
import kelvinProfile from '../public/kelvinProfile.png'
import jsProfile from '../public/jsProfile.png'
import kelvinStory1 from '../public/kelvinStory1.png'
import kelvinStory2 from '../public/kelvinStory2.png'
import ourStoryBg from '../public/ourStoryBg.png'
import kvJs1 from '../public/kvJs1.jpg'
import kvJs2 from '../public/kvJs2.jpg'
import kvJs3 from '../public/kvJs3.jpg'
import kvJs4 from '../public/kvJs4.jpg'
import jsStory1 from '../public/jsStory1.jpg'
import jsStory2 from '../public/jsStory2.jpg'
import styled from 'styled-components'

const about = () => {
  return (
    <>
      <div className="mb-[250px]">
        <div className="-mt-[100px] flex w-full flex-row justify-center lg:-mt-[250px]">
          <img
            alt={'Zetta'}
            className=""
            src={aboutLogo.src}
            style={{ zIndex: -1 }}
          />
        </div>
        <div className="width-[100%] -mt-[50px] flex flex-row justify-center lg:-mt-[200px]">
          <a href="#next_section">
            <button className="scale-75 rounded-full border-2 border-white p-[15px] transition duration-200 hover:scale-100 md:scale-100 md:hover:scale-125">
              <span className="text-[20px] text-white">Read More</span>
            </button>
          </a>
        </div>
      </div>
      <Descrip1Container id="next_section">
        <img
          alt={'Zetta'}
          className=""
          src={aboutDescripImg.src}
          width="100%"
          style={{ height: '800px' }}
        />
        <CenterDescrp1>
          Technology evolves at a rapid pace, and new pieces of technology are
          constantly being introduced to replace others that have become
          obsolete. Day after day, a significant number of people are starting
          to look forward to reading tech blogs.
        </CenterDescrp1>
      </Descrip1Container>
      <Descrip2Container>
        <CenterDescrp2Title>
          Zeal for Excellence & Thrive for Ambitious Ascension
        </CenterDescrp2Title>
        <br />
        <Descrip2SubContainer>
          <CenterDescrp2Content style={{ color: '#b72025' }}>
            ZetaaHacks
          </CenterDescrp2Content>
          <CenterDescrp2Content>
            {' '}
            is a tech product & software review site, we act as a creative
            outlet that shares your ideas and opinions with the world about it
            to fill our readers with informative & ease of understanding reviews
            and tech recommendations or criticisms with your audience of tech
            lovers.
          </CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Content style={{ color: '#b72025' }}>
            ZetaaHacks
          </CenterDescrp2Content>
          <CenterDescrp2Content>
            {' '}
            also gives a glimpse about the present and future of tech through
            news and trends, voice out our opinions about what is going to
            happen in the industry and create a how-to blog to help users on
            tech & software.
          </CenterDescrp2Content>
        </Descrip2SubContainer>
      </Descrip2Container>
      <TeamContainer>
        <TitleContainer>
          <Title>TEAM</Title>
        </TitleContainer>
        <TitleLine />
        <MainContentContainer>
          <SubContentContainer1>
            <RightContentContainer>
              <ProfileName>KELVIN LOW</ProfileName>
              <br />
              <br />
              <ProfileContent>
                Kelvin Low is a part time blogger and an interior designer for
                years. He is a music lover and very inquisitive on tech products
                especially computers. Has expertise in 3D modeling softwares
                such as 3DsMax & Sketchup. He also has experience in photography
                & writing articles.
              </ProfileContent>
            </RightContentContainer>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={kelvinProfile.src} />
            </ProfileImgContainer>
          </SubContentContainer1>
          <SubContentContainer2>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={jsProfile.src} />
            </ProfileImgContainer>
            <LeftContentContainer>
              <ProfileName>JUNSHEN YEOH</ProfileName>
              <br />
              <br />
              <ProfileContent>
                Junshen Yeoh is a part-time blogger and software engineer who
                has high passionate in web development and always keeps up with
                the latest technology trends such as blockchain or AI
                (Artificial Intelligence). He also has related knowledge in game
                development and data analysis.
              </ProfileContent>
            </LeftContentContainer>
          </SubContentContainer2>
        </MainContentContainer>
      </TeamContainer>
      {/* Our story  */}
      <Descrip2Container>
        <CenterDescrp2Title>Our Story</CenterDescrp2Title>
        <br />
        <br />
        <CenterDescrp2Title>LIFE</CenterDescrp2Title>
        <Descrip2SubContainer>
          <CenterDescrp2Content>
            It was never promised that life would be easy. It's never going to
            be a perfect ride through life.. Albert Einstein once said that if
            you have never failed, it just simply means you have not tried
            anything new. There will always be a way to overcome your
            hardships.It may not be the simplest path to pursue, and it may take
            some time, but you will succeed. Only if you choose to view your
            issues and trials from a different perspective.
          </CenterDescrp2Content>
          <ImgContainer style={{ justifyContent: 'center' }}>
            <img
              alt={'Zetta'}
              className=""
              src={kvJs1.src}
              width="80%"
              style={{ alignSelf: 'center' }}
            />
          </ImgContainer>
        </Descrip2SubContainer>
      </Descrip2Container>
      <JourneyContainer>
        <TitleContainer>
          <Title>Our Journey</Title>
        </TitleContainer>
        <TitleLine />
        <MainContentContainer style={{ padding: '50px' }}>
          <JourneyTitle>FRIENDSHIP TO BROTHERHOOD</JourneyTitle>
          <br />
          <JourneyDescrip>
            Nothing beats the emotions and feelings that come from embarking on
            an adventure with our friendship companions. Our journey taught us
            how to overcome our daily challenges and life hurdles through
            friendship. That is why I want to tell you about the most incredible
            adventure we have ever taken. A journey to zeal for excellence.
          </JourneyDescrip>
          <br />
          <JourneyDescrip>
            We both study in the same high school in Penang, Malaysia. It could
            be because of our introverted nature that we get along so well. We
            became best friends in high school and never lost touch from the day
            we met. The key reason for this is because we share similar
            interests and passions and most significantly, we have the same
            philosophy and mindset..
          </JourneyDescrip>
          <br />
          <ImgContainer>
            <img
              alt={'Zetta'}
              className=""
              src={kvJs2.src}
              width="80%"
              style={{ marginBottom: '20px' }}
            />
          </ImgContainer>
          <br />
          <JourneyTitle>ZEAL FOR EXELLENCE</JourneyTitle>
          <br />
          <JourneyDescrip>
            We're both looking for financial freedom and a better way of life,
            despite the fact that we pursued separate career routes after high
            school. Kelvin was pursuing Interior Design while Jun Shen was
            taking Software Engineering. Although our paths to the future are
            divergent but our links will never be broken deep within because We
            don't just share characteristics, we're still exchanging our
            experience in several fields and attempting to figure out how to
            work together to accomplish our objectives.
          </JourneyDescrip>
          <br />
          <JourneyDescrip>
            When we start to work on our 9 to 5 jobs we are confronted with
            reality, facing low salary, inflation & high expenses as we are
            having the lifestyle we don't choose. We are experiencing financial
            difficulties as we are anxious about our future. In the beginning of
            2022 We have begun to develop some financial literacy and
            successfully manage our finances, but this is insufficient for our
            current situation.
          </JourneyDescrip>
          <br />
          <ImgContainer>
            <img
              alt={'Zetta'}
              className=""
              src={kvJs3.src}
              width="80%"
              style={{ marginBottom: '20px' }}
            />
          </ImgContainer>
          <br />
          <JourneyTitle>Thrive for Ambitious Ascension</JourneyTitle>
          <br />
          <JourneyDescrip>
            In 2022, our ambitious ascension had brought us to blogging so we
            had been planning this for months and had decided to build a blog
            from scratch. We decided to dive into the technology niche because
            we had experience with software & we were also inquisitive on tech
            products especially computers.
          </JourneyDescrip>
          <br />
          <JourneyDescrip>
            Technology is always evolving, with new technologies emerging daily
            to replace those that have become obsolete. Tons of people enjoy
            reading tech blogs on a daily basis. We act as a creative outlet
            that communicates our ideas and opinions with the world about it in
            order to provide our audience of tech lovers with informative and
            easy-to-understand reviews and tech recommendations or criticisms.
          </JourneyDescrip>
          <br />
          <JourneyDescrip>
            Through news and trends, we also provide a glimpse into the present
            and future of technology and express our thoughts on what is going
            on in the industry by starting a how-to blog to assist users with
            technology and software.
          </JourneyDescrip>
          <br />
          <JourneyDescrip>
            So this is how it all begins - Zetta Hacks.
          </JourneyDescrip>
          <ImgContainer>
            <img
              alt={'Zetta'}
              className=""
              src={kvJs4.src}
              width="80%"
              style={{ marginBottom: '20px' }}
            />
          </ImgContainer>
        </MainContentContainer>
      </JourneyContainer>
      <HistoryContainer>
        <Title>History</Title>
        <HistoryContentContainer>
          <SubContentContainer2>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={kelvinStory1.src} />
            </ProfileImgContainer>
            <LeftContentContainer>
              <ProfileName>KELVIN LOW</ProfileName>
              <br />
              <br />
              <ProfileContent>
                My story of my life, interesting enough with ups and downs. It
                all began on February 10, 2000 in Penang Malaysia, where I was
                delivered at night. My parents had me as the oldest child. I had
                no idea who I was or where I would wind up in my life after
                that. My life altered as I grew older, with each milestone in an
                eventful and intriguing life.
              </ProfileContent>
              <br />
              <br />
              <ProfileContent>
                I began my academic career in 2007. My primary school experience
                has been mostly favourable. as I'm an average kid with average
                grades. When I was in high school my life started declining in a
                chaotic way with academic & relationship problems. This is where
                my introversion began.
              </ProfileContent>
            </LeftContentContainer>
          </SubContentContainer2>
          <SubContentContainer2>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={kelvinStory2.src} />
            </ProfileImgContainer>
            <LeftContentContainer>
              <ProfileContent>
                Moving into my college, an upward spiral for my life with a
                positive direction towards a devastated reality check for my
                interior design career facing low salary, inflation & high
                expenses as I'm experiencing the lifestyle i don't choose. I
                slowly shifted my ideology and mindset as my life progressed as
                I was constantly learning about finance and became a believer of
                financial freedom.
              </ProfileContent>
              <br />
              <br />
              <ProfileContent>
                As people said, financial freedom is about taking ownership of
                your finances or making lots of money. In my mind, The term
                "freedom" is all that counts to me. That's when I started to see
                a whole different picture of my life in my thoughts. A blueprint
                for freedom that will usher in a new era….
              </ProfileContent>
            </LeftContentContainer>
          </SubContentContainer2>
        </HistoryContentContainer>
        <HistoryContentContainer>
          <SubContentContainer1>
            <RightContentContainer>
              <ProfileName>JUNSHEN YEOH</ProfileName>
              <br />
              <br />
              <ProfileContent>
                Hello, this is my life narrative.I was born in the century leap
                year (2000) and the only child in my family. I was born into a
                middle-class household and believe that the day I was born, I
                was delighted with my life. Like everyone else, it should be a
                charming life story.
              </ProfileContent>
              <br />
              <br />
              <ProfileContent>
                Nevertheless, God does roll the dice. A month after my birth, My
                father died after being involved in an automobile accident. My
                mother is struggling as we have lost our family pillar and
                breadwinner. My childhood was, I suppose, a little rough. I'm
                not a particularly bright kid. In fact, I am a sluggish learner
                with a fragile physical condition. I can't tell you how many
                times I've been to the hospital for various illnesses.
              </ProfileContent>
            </RightContentContainer>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={jsStory1.src} />
            </ProfileImgContainer>
          </SubContentContainer1>
          <SubContentContainer1>
            <RightContentContainer>
              <ProfileContent>
                Even though I was young at the time, I was aware that my mother
                was having financial difficulties as a result of my fragile
                condition. Fortunately, things improved once I entered high
                school. My academic performance and physical strength continue
                to improve. After a while, I was eligible to enter first class
                for my first degree in software engineering.
              </ProfileContent>
              <br />
              <br />
              <ProfileContent>
                However, My tumultuous childhood taught me the value of money.
                Money was the only tool to help get by during my difficult
                childhood. Due to the inflation & high expenses in Malaysia, I
                realised that I should do far more than work on a stable job and
                earn a constant salary year by year. I have kept learning
                financial literacy and changing my poverty mindset in order to
                achieve one goal - a better lifestyle for me and my family….
              </ProfileContent>
            </RightContentContainer>
            <ProfileImgContainer>
              <ProfileImg alt={'Zetta'} src={jsStory2.src} />
            </ProfileImgContainer>
          </SubContentContainer1>
        </HistoryContentContainer>
      </HistoryContainer>
      <Descrip2Container>
        <CenterDescrp2Title>
          A Moment To Express My Gratitude For Your Presence.
        </CenterDescrp2Title>

        <Descrip2SubContainer>
          <CenterDescrp2Content>
            Having come this far, I appreciate every relationship I develop
            through my blog immensely and am grateful that you took the time to
            read it.
          </CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Content>
            I'm here for you as a friend and a tech blogger. I make an effort to
            reply to each email, and I'd want to hear your tale – both positive
            and negative.
          </CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Content>
            I want to create a tech community where tech lovers can learn,
            collaborate, provide and work smarter. Since we’re all tech lovers,
            we should to band together, help each other up, sharing caring
            together and rally together to win.
          </CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Content>I appreciate you reading.</CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Content>
            I hope that the story of your life brings you inspiration, freedom,
            and happiness.
          </CenterDescrp2Content>
          <br />
          <br />
          <CenterDescrp2Title>ZETAAHACKS</CenterDescrp2Title>
          <br />
          <br />
          <ImgContainer style={{ justifyContent: 'center' }}>
            <img
              alt={'Zetta'}
              className=""
              src={ourStoryBg.src}
              width="80%"
              style={{ alignSelf: 'center' }}
            />
          </ImgContainer>
        </Descrip2SubContainer>
      </Descrip2Container>
    </>
  )
}

export default about

const CenterDescrp1 = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-20%, -50%);
`

const Descrip1Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  font-family: 'JetBrains Mono';
  font-weight: 800;
  font-size: 32px;
  line-height: 55px;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 30px;
  }
`
const Descrip2Container = styled.div`
  width: '100%';
  height: auto;
  background-color: black;
  text-align: center;
  padding: 50px;
  font-family: 'JetBrains Mono';
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`

const Descrip2SubContainer = styled.div`
  width: 100%;
  padding: 50px;
  height: auto;
  @media (max-width: 768px) {
    padding: 5px;
  }
`

const CenterDescrp2Title = styled.span`
  font-weight: 800;
  font-size: 40px;
  line-height: 53px;
  text-align: center;
  color: red;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const CenterDescrp2Content = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const TeamContainer = styled.div`
  background-image: url(${aboutTeam.src});
  width: 100%;
  height: 800px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    background-size: contain;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const Title = styled.span`
  color: white;
  font-weight: 800;
  font-size: 48px;
  line-height: 63px;
  @media (max-width: 768px) {
    text-decoration: underline;
  }
`

const TitleLine = styled.div`
  border-left: 3px solid #ffffff;
  margin: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`

const MainContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px !important;
    padding-top: 10px;
  }
`
const SubContentContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const SubContentContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftContentContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 70px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    padding: 15px;
    width: 100%;
  }
`

const RightContentContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 70px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    padding: 15px;
    width: 100%;
  }
`

const ProfileImgContainer = styled.div`
  width: 25%;
  padding-right: 30px;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-right: 0px;
  }
`

const ProfileName = styled.span`
  font-size: 38px;
  font-weight: 800;
  line-height: 50px;
  font-family: 'JetBrains Mono';
  color: white;
`

const ProfileContent = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  color: white;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`
const ProfileImg = styled.img`
  height: 80%;
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const JourneyContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const JourneyTitle = styled.span`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 50px;
  color: red;
  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 30px;
  }
`

const JourneyDescrip = styled.span`
  font-family: 'Encode Sans Expanded';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 45px;
  color: whitesmoke;
`

const HistoryContainer = styled.div`
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const HistoryContentContainer = styled.div`
  padding-top: 50px;
`
