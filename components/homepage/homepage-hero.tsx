import CategoryButton from './category-button';

export const HomepageHero = () => {
  const images = [
    {
      src: '/img/hero/dogbag.png',
      height: 1075,
      width: 998,
      alt: 'link to dog bags section',
      link: '/search/マークテトロ-ショルダーバッグ'
    },
    {
      src: '/img/hero/marimekko.png',
      height: 1484,
      width: 1659,
      alt: 'link to marimekko section',
      link: '/search/フィンランド-夏服'
    },
    {
      src: '/img/hero/golf.png',
      height: 1848,
      width: 1634,
      alt: 'link to golf section',
      link: '/search/circolo-golf-ugolino-ゴルフウェア'
    },
    {
      src: '/img/hero/babyclothes.png',
      height: 1872,
      width: 2287,
      alt: 'link to baby clothes section',
      link: '/search/デンマーク子供服'
    }
  ];

  return (
    <div className="border-b-1 border-b border-primary">
      <div className="relative mx-auto h-screen max-w-[1512] bg-[url(/img/hero/mainBg.png)] bg-cover">
        {/* Content Container */}
        <div className="absolute inset-0 z-40 hidden h-full w-full p-12 xl:block">
          <div className="grid grid-cols-3 gap-40">
            <div className="ml-12 flex flex-col">
              <div className="my-auto space-y-4">
                <p className="text-2xl font-medium">まきぶーの気まぐれ輸入品店</p>
                <h1 className="font-brand text-8xl">MAKKiKi</h1>
              </div>
            </div>
            {images.slice(0, 2).map((img, index) => (
              <CategoryButton key={index} {...img} />
            ))}
          </div>

          <div className="mr-24 grid grid-cols-2 content-evenly justify-between gap-20 xl:-mt-12">
            {images.slice(2).map((img, index) => (
              <div className="mx-12" key={index}>
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>
        </div>

        {/* For mobile */}
        <div className="absolute inset-0 z-40 flex h-full w-full flex-col space-y-20 px-6 py-12 lg:px-12 xl:hidden">
          <div className="lg: grid h-1/3 grid-cols-2 md:space-x-16 lg:space-x-40">
            {images.slice(0, 2).map((img, index) => (
              <div className={index === 0 ? 'md:mx-20 lg:mx-36' : ''} key={index}>
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>
          <div className="mx-auto flex h-1/3 flex-col">
            <div className="my-auto space-y-4">
              <p className="text-xl font-medium">まきぶーの気まぐれ輸入品店</p>
              <h1 className="font-brand text-7xl">MAKKiKi</h1>
            </div>
          </div>
          <div className="grid h-1/3 grid-cols-2 content-evenly justify-between md:mx-12 lg:mx-0">
            {images.slice(2).map((img, index) => (
              <div className="md:-mt-20 lg:mx-12">
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>
        </div>

        {/* Background scraps */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 z-30 h-screen w-full max-w-40 bg-[url(/img/hero/leftScrapMobile.png)] bg-cover lg:max-w-xl lg:bg-[url(/img/hero/leftScrap.png)]" />
          <div className="absolute right-0 z-30 h-screen w-full max-w-40 bg-[url(/img/hero/rightScrap.png)] bg-cover lg:max-w-xs" />
          <div className="absolute bottom-0 left-0 z-20 h-52 w-full max-w-5xl bg-[url(/img/hero/leftBottomScrap.png)] bg-cover" />
          <div className="absolute bottom-0 right-0 z-20 h-1/2 w-full max-w-52 bg-[url(/img/hero/rightBottomScrap.png)] bg-cover lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
export { CategoryButton };
