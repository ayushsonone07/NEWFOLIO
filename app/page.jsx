import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="">
      <div className="grid h-screen place-items-center">
        <h1 className="text-5xl from-zinc-700	font-bold text-center lg:text-9xl m-0">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Welcome
          </span>
          <br />
          <span className="text-5xl lg:text-7xl">
            to my Portfolio.site
          </span>
        </h1>
        <p className="text-center hover:text-slate-500 ">scroll down to see more &darr;</p>
      </div>
      <section className='w-full h-screen	justify-center my-8'>
        <h1 className='text-center text-5xl font-bold'>My Skills</h1>
        <h2 className='text-center text-3xl font-bold'>Languages</h2>
        <p className='text-center'> Basics of C,Javascript</p>
        <br />
        <h2 className='text-center text-3xl font-bold'>Front-End</h2>
        <p className='text-center'>HTML, CSS, Javascript, React JS</p>
        <br />
        <h2 className='text-center text-3xl font-bold'>Tools</h2>
        <p className='text-center'>Git, Linux, Figma</p>
        <button>
          <Link href="">Resume</Link>
        </button>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <div>
          <h1>My badges</h1>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b9246978-a6b7-4ef5-9654-3d4909fb5a57" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c5d68475-5088-4468-ad4e-aa211f7c3ba4" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8de24934-d629-492e-9e63-f6438b081c54" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="704af5ee-fc7b-4b09-9dc7-c31a4c5ef970" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
      </section>
    </div>
  );
};

export default Home;
