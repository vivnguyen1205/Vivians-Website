import Card from '../components/card.jsx';
import '../components/card.css'; 
import '../index.css'

function Project(){

    const cardDataSets = [
      {
        id: 'SwiftApps',
        cover: '/swiftapps.png',
        subtitle: 'SwiftApps',
        desc: 'faster applications. fewer errors. more offers.',
        tags: ['python','flask', 'Selenium','Google Vision AI', 'Cohere'],
        link: 'https://github.com/vivnguyen1205/SwiftApps',
      },
        {
            id: 'FreeMario',
            cover: '/directu.png',
            subtitle: 'FreeMario',
            desc: 'your degree without the hassle, won 1st for best use of cohere @ hack the north 2023 🏆 ',
            tags: ['java', 'Gradle','OpenGL','GLFW', 'imGui'],
            link: 'https://github.com/vivnguyen1205/FreeLuigi'
          },
          {
            id: 'Employee-Management-System',
            cover: '/kubz.png',
            subtitle: 'Employee-Management-System',
            desc: 'redesigned ecommerce front for a local toronto-owned business',
            tags: ['react','java','SpringBoot API'],
            link: 'https://github.com/vivnguyen1205/Employee-Management-System'
          },
          
          {
            id: 'Media Bias Analyzer',
            cover: '/101districts.png',
            subtitle: 'Media Bias Analyzer',
            desc: 'helping you fast track all the bad parts of vacationing',
            tags: ['python','openAI'],
            link: 'https://github.com/vivnguyen1205/MediaBiasAnalyzer'
          },
          {
            id: 'Maze Runner Game',
            cover: '/msw.jpeg',
            subtitle: 'Maze Runner Game',
            desc: 'a tft inspired auto chess battler game with a maplestory twist, available on maplestory worlds',
            tags: ['lua','msw','game dev'],
            link: '',
          },
          {
            id: 'Drone Rescue Mission Virtual Game',
            cover: '/reverie.png',
            subtitle: 'Drone Rescue Mission Virtual Game',
            desc: 'workspace, streamlining all your study needs',
            tags: ['web dev', 'productivity', 'react'],
            link: 'https://reverie-pomo.vercel.app',
          },
          // {
          //   id: 'sidealong',
          //   cover: '/white.jpeg',
          //   subtitle: 'side-along',
          //   desc: 'a friend is waiting to hear about your day...',
          //   tags: ['chrome ext','javascript'],
          // },
      ];
    
      return (
        <>
        <p className='title'> it's coming together</p>

        <div className='card-box'>
          {cardDataSets.map((cardData, index) => (
            <div className='card-boxes' key={index}>
              <Card 
                path="/projects"
                id={cardData.id}
                cover={cardData.cover}
                subtitle={cardData.subtitle}
                desc={cardData.desc}
                tags={cardData.tags}
                link={cardData.link}
              />
            </div>
          ))}
        </div>
        
        </>
      );
}

export default Project;
