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
              <div className="my-auto w-full max-w-4xl space-y-4">
                <h1 className="text-8xl">MAKKiKi</h1>
                <p className="text-5xl">
                  MAKKiKiでは人生を楽しくハッピーにするような
                  <br />
                  ワクワクドキドキする雑貨を販売しています。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For mobile */}
        <div className="absolute inset-0 z-40 flex h-screen w-full flex-col space-y-6 px-6 py-12 lg:px-12 xl:hidden">
          <div className="z-50 mx-auto flex flex-col">
            <div className="my-auto space-y-4 text-center">
              <h1 className="text-6xl md:text-7xl">MAKKiKi</h1>
              <p>
                黄色はスピリチュアな意味合いで豊かさを連想させる色であり、喜色とも書かれます。MAKKiKiでは人生を楽しくハッピーにするようなワクワクドキドキする雑貨を販売しています。
                <br />
                ヨーロッパ、アメリカ、オーストラリアを中心に心豊かな「もの」との出会いを求めて自ら買付を行なっています。
                <br />
                MAKKiKi〜豊かさ〜をショップ名に選んだのは、実際に買い付けに出向いた場所で自らが心豊かになったものとの出会いを大切にしたかったから。そしてMAKKiKiがその感動をシェアできる場所でありたいと願っているからです。
              </p>
            </div>
          </div>
          <div className="flex h-1/3 justify-between"></div>
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
