import Link from 'next/link';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (

    <div >
      < Navbar />

      {/*Landing Page*/}
      <div className="p-4 px-6 lg:max-w-6xl h-80 mx-auto flex mt-11 md:flex-row flex-col justify-between content-center">
        <div className={`flex h-4/5 flex-col basis-1/2 text-center md:text-left ml-3 ${montserrat.className}`}>
          <h1 className="text-7xl light-gray my-2 ">Hi, </h1>
          <h1 className="text-7xl light-gray mb-3">I'm <span className="white">Tanika</span>. </h1>
          <h2 className="text-4xl my-2 light-gray">I build <span className="white">software</span>.</h2>
          <Link href="#blog" className="w-48 mx-auto md:mx-0 purple text-center border-box rounded my-5 outline p-2" >Check out my blog!
          </Link>

        </div>

        <div className="basis-1/2 h-4/5 md:text-right text-center flex justify-end mr-3">
          <div className="xl:w-3/4 lg:w-5/6 md:w-full md:m-0 mx-auto ">
            <p className="light-gray mb-3 ">Math & Computer Science @ UMD</p>
            <p className="blurb ">
              Throughout my college career I’ve developed an increasing passion for software development and problem-solving,
              and cloud computing. I developed this website as a way to streamline my creativity and flow of thoughts
            </p>
            <br>
            </br>
            <p className="blurb ">
              Recently, I worked as a cloud engineering intern at <span className="purple">Vanguard</span>, where I work on innovative
              solutions that enhance efficiency and scalability.
            </p>
          </div>
        </div>
      </div>



      {/* Certification Section */}
      <div className="p-4 px-6 lg:max-w-6xl h-70 mx-auto flex mt-11 md:flex-row flex-col justify-start content-center">
        <div className={`flex h-4/5 flex-col basis-1/2 text-center md:text-left ml-3 ${montserrat.className}`}>
          <h1 className="text-4xl my-2 ">2x Certified </h1>
          <div>
            <Link href="https://www.credly.com/users/tanika-jangam" className="mx-auto sm:mx-0 purple text-xl border-box underline" passHref>
              Check out my credly!
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full basis-1/2 flex flex-col md:flex-row justify-start">
            <Image
              src="/dev-cert.png"
              alt="AWS Developer Certification - Associate Level"
              width={100}
              height={100}
            />
            <Image
              src="/solarch-cert.png"
              alt="AWS Solutions Architect Certification - Associate Level"
              width={100}
              height={100}
            />
          </div>
        </div>

      </div>

      {/* Jobs Section */}
      <div className="p-4 px-6 md:max-w-6xl h-60 mx-auto mt-11">

        <div className="flex flex-col sm:flex-row ml-3 justify-between w-full items-end" >
          <h1 className={`text-4xl max-h-min ${montserrat.className}`}> Where I've Worked </h1>

          <Link href="\resume" className="mx-auto sm:mx-0 purple text-xl border-box max-h-min" passHref>
            VIEW FULL RESUME
          </Link>
        </div>

        <div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="basis-1/4 ">
              <button>Vanguard</button>
              <br></br>
              <button>HP</button>
              <br></br>
              <button>UMD IT</button>
              <br></br>
              <button>PMIT</button>
            </div>
            <div className="basis-3/4">
              <h2>Cloud Operations & Engineering Intern @ Vanguard</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Provide technical support on high severity incident calls hosted on AWS ECS, EC2, and Lambda Functions</li>
                <li>Assist application teams during build and deployment failures on Bamboo CI/CD Pipeline</li>
                <li>Automate Zero Day patching processes using AWS Systems Manager</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Featured Projects */}
      <div className="p-4 px-6 md:max-w-6xl min-h-60 mx-auto mt-11">

        <div className="flex flex-col sm:flex-row justify-between w-full items-end" >
          <h1 className={`text-4xl max-h-min ${montserrat.className}`}> 2024 Featured Projects </h1>

          <Link href="\resume" className="mx-auto sm:mx-0 purple text-xl border-box max-h-min" passHref>
            VIEW FULL PORTFOLIO
          </Link>
        </div>


        <div className="min-h-48 flex flex-col items-center justify-start space-y-12">
          <ProjectCard
            title="HabitTracker"
            description={`HabitTracker can record the number of stress symptoms or "bad habits" you exhibit (for example, biting your nails, scratching your head until the blood oozes out – all symptoms of mental stress). HabitTracker uses real-time hand detection directly from your browser. Underneath, it uses a neural network that provides bounding box predictions for the location of your hands in an image (using the Tensorflow object detection API).`}
            githubUrl="https://github.com/tanikajangam/notifly"
            youtubeUrl="https://youtube.com/example-video"
            imageUrl="/HabitTracker.png"
          />

        </div>
      </div>


      <div className="p-4 px-6 h-screen min-h-64 lg:max-w-6xl mx-auto">
        <h1 className={`text-4xl mb-4 max-h-min ${montserrat.className}`}> {`Latest Blog (Tech/Productivity) Posts`}</h1>

        <div className="space-y-6 flex flex-col justify-start align-start min-h-40">
          <BlogCard title="Mastering Next.js for Beginners" date="December 2024" url="#" />
          <BlogCard title="Improving Productivity with AI Tools" date="November 2024" url="#" />
          <BlogCard title="Building Scalable Applications with AWS" date="October 2024" url="#" />
        </div>
      </div>

      <div>
        

      </div>

    </div >
  );
}

