import { useRouter } from 'next/router';

// const twitter = <svg className="inline-block w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204"><path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0022.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0022.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 00104.08 52.76 50.532 50.532 0 0114.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 01-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 01-25.2 26.16z" fill="#1d9bf0"/></svg>;

// Example URL: http://localhost:3000/phiilu.com?title=Hello%20mein%20Name%20ist%20Florian!&url=https://phiilu.com/hello-world
const DefaultGenerator = () => {
  //const router = useRouter();

  //const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  // const link = searchParams.get('url');
  // console.log('🚀 ~ file: index.tsx ~ line 11 ~ DefaultGenerator ~ link', link);

  // //if (!link) return null;

  // const linkURL = new URL(link);
  // const title = searchParams.get('title');
  // const date = searchParams.get('date');
  // const readTime = searchParams.get('readTime');

  return (
    <div
      className="relative flex flex-col justify-between p-16 text-gray-100 shadow-md bg-primary"
      style={{ width: 1200, height: 630 }}
    >
      Yep
    </div>
  );
};

export default DefaultGenerator;
