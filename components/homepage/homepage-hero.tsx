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
    <div className="">
      <div className="relative mx-auto h-screen max-w-[1512px] bg-[url(/img/hero/mainBg.png)] bg-cover">
        {/* Content Container */}
        <div className="absolute inset-0 z-40 hidden h-full w-full p-12 xl:block">
          <div className="flex h-1/2 space-x-40">
            <div className="ml-12 flex flex-col">
              <div className="my-auto space-y-4">
                <p className="text-2xl font-medium">気まぐれ輸入品店</p>
                <h1 className="font-brand text-8xl">MAKKiKi</h1>
              </div>
            </div>
            {images.slice(0, 2).map((img, index) => (
              <div className="max-w-96" key={index}>
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>

          <div className="mx-auto flex h-1/2 max-w-4xl justify-between space-x-20">
            {images.slice(2).map((img, index) => (
              <div className="max-w-96" key={index}>
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>
        </div>

        {/* For mobile */}
        <div className="absolute inset-0 z-40 flex h-screen w-full flex-col space-y-6 px-6 py-12 lg:px-12 xl:hidden">
          <div className="flex h-1/3 justify-between">
            {images.slice(0, 2).map((img, index) => (
              <div className="w-60 md:w-80">
                <CategoryButton key={index} {...img} />
              </div>
            ))}
          </div>
          <div className="z-50 mx-auto flex flex-col">
            <div className="my-auto space-y-4 text-center">
              <p className="text-lg font-medium md:text-xl">気まぐれ輸入品店</p>
              <h1 className="font-brand text-6xl md:text-7xl">MAKKiKi</h1>
            </div>
          </div>
          <div className="flex h-1/3 justify-between">
            {images.slice(2).map((img, index) => (
              <div className="w-60 md:w-80">
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
