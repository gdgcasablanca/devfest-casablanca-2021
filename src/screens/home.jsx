import PageHeader from '../components/page-header'

const hashtags = [
  {
    label: (
      <span>
        #<span className='font-bold'>Devfest</span>Casablanca
      </span>
    ),
    href: 'https://twitter.com/hashtag/DevfestCasablanca',
  },
  {
    label: (
      <span>
        #Lets<span className='font-bold'>Grow</span>Together
      </span>
    ),
    href: 'https://twitter.com/hashtag/letsgrowtogether',
  },
]

const footerLinks = [
  {
    title: 'Past DevFests',
    links: [
      {
        label: 'DevFest Casablanca 2020',
        href: 'https://devfest-casablanca-2020.web.app/',
      },
      {
        label: 'DevFest Casablanca 2019',
        href: 'https://devfest-casablanca-2019.web.app/',
      },
      {
        label: 'DevFest Casablanca 2018',
        href: 'https://devfest-casablanca-2018.web.app/',
      },
      {
        label: 'DevFest Casablanca 2017',
        href: 'https://devfest17-casabanlca.web.app/',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'GDG Casablanca',
        href: 'https://gdgcasablanca.com/',
      },
      {
        label: 'WTM Casablanca',
        href: 'https://wtm.gdgcasablanca.com/',
      },
      // {
      //   label: 'Code of conduct',
      //   href: '/coc',
      //   internal: true,
      // },
      {
        label: 'Google Developers Group',
        href: 'https://developers.google.com/community/gdg',
      },
      {
        label: 'Women Techmakers',
        href: 'https://www.womentechmakers.com/',
      },
    ],
  },
  // {
  //   title: 'Social',
  //   links: [
  //     {
  //       label: 'Meetup',
  //       href: 'https://www.meetup.com/GDGCasablanca/',
  //     },
  //     {
  //       label: 'Twitter',
  //       href: 'https://twitter.com/gdgcasablanca',
  //     },
  //     {
  //       href: 'https://www.facebook.com/GDGCasa/',
  //       label: 'Facebook',
  //     },
  //     {
  //       label: 'LinkedIn',
  //       href: 'https://www.linkedin.com/company/gdgcasablanca/',
  //     },
  //   ],
  // },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        href: 'mailto:contact@gdgcasablanca.com',
      },
      {
        label: 'Twitter Page',
        href: 'https://twitter.com/gdgcasablanca',
      },
      {
        label: 'Facebook Page',
        href: 'https://www.facebook.com/GDGCasa/',
      },
    ],
  },
]

export default function HomeScreen() {
  return (
    <main className='flex flex-col gap-y-32'>
      <PageHeader />

      <section className='py-24'>
        <div className='flex flex-wrap gap-12 justify-between py-4 px-6 mx-auto max-w-6xl'>
          <div className='flex-shrink'>
            <h2 className='text-5xl font-bold mb-4'>
              Devfest
              <br />
              Casablanca 2021
            </h2>
            <p className='max-w-2xl text-xl'>
              #<span className='font-bold'>devfest</span>casablanca is a
              community-run developer event happening every year focused on
              community building and learning about Google&apos;s technologies
              and IT concepts in general.
            </p>
          </div>
          <div className='md:min-w-max flex flex-col gap-y-6'>
            <div>
              <div className='inline-block px-6 py-3 mb-4 text-xl text-white font-bold bg-blue-500 rounded-full'>
                When
              </div>
              <p className='text-2xl'>November 27, 2021</p>
            </div>
            <div>
              <div className='inline-block px-6 py-3 mb-4 text-xl text-white font-bold bg-blue-500 rounded-full'>
                Where
              </div>
              <p className='text-2xl'>EMSI Les Oranger, Casablanca</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-24'>
        <div className='flex flex-col gap-y-6 items-center px-6 mx-auto max-w-6xl'>
          <h3 className='text-5xl text-center font-bold'>
            Share your story with us
          </h3>
          <p className='text-2xl text-center'>
            Let’s connect and use these hashtags:
          </p>
          <ul className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-2xl'>
            {hashtags.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='inline-block px-5 py-2 bg-[#CDDFFD] rounded-full'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className='py-20 bg-[#CDDFFD]'>
        <div className='flex flex-col gap-32 px-6 mx-auto max-w-6xl'>
          <div>
            <div className='text-sm mb-1'>Brought to you by</div>
            <h4 className='text-3xl'>GDG & WTM Casablanca</h4>
          </div>

          <div className='flex flex-wrap justify-between gap-12'>
            {footerLinks.map((linksSet, index) => (
              <div key={index.toString()}>
                <h5 className='text-xl font-bold mb-2.5'>{linksSet.title}</h5>
                <ul className='flex flex-col gap-y-1'>
                  {linksSet.links.map(({ label, href }, index) => (
                    <li key={index.toString()} className='text-xl'>
                      <a href={href} target='_blank' rel='noreferrer noopener'>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className='text-center'>
            Made with ❤️ By{' '}
            <a
              href='https://github.com/gdgcasablanca/'
              className=''
              target='_blank'
              rel='noreferrer noopener'
            >
              GDG Casablanca
            </a>
            ,{' '}
            <a
              href='https://github.com/gdgcasablanca/devfest-casablanca-2021'
              className=''
              target='_blank'
              rel='noreferrer noopener'
            >
              sourced on GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  )
}
