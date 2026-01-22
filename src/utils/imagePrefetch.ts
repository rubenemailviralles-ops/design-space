const pageImages: Record<string, string[]> = {
  '/': [
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxurious%20modern%20living%20room%20with%20beige%20and%20white%20tones%2C%20spacious%2C%20high%20ceilings%2C%20minimalist%2C%20elegant%2C%20soft%20lighting%2C%20high%20quality%2C%208k&image_size=landscape_16_9",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20lakeside%20villa%20interior%2C%20large%20windows%2C%20nature%20view%2C%20beige%20and%20wood%2C%20serene%2C%20luxury%2C%20photorealistic%2C%208k&image_size=landscape_4_3",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Urban%20penthouse%20living%20room%2C%20city%20skyline%20view%2C%20modern%20furniture%2C%20grey%20and%20white%2C%20sophisticated%2C%20interior%20design%2C%208k&image_size=portrait_4_3",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20office%20lobby%2C%20minimalist%20brand%20headquarters%2C%20spacious%2C%20professional%2C%20white%20and%20glass%2C%20interior%20design%2C%208k&image_size=landscape_4_3",
  ],
  '/brand-development': [
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20brand%20mood%20board%20with%20neutral%20colors%2C%20typography%20samples%2C%20textures%2C%20high%20quality%2C%20artistic%20layout%2C%208k&image_size=landscape_16_9",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20office%20desk%20flatlay%20with%20brand%20stationery%2C%20laptop%2C%20coffee%2C%20beige%20tones%2C%20professional%2C%208k&image_size=square_hd",
  ],
  '/client-stories': [
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20lakeside%20villa%20interior%2C%20large%20windows%2C%20nature%20view%2C%20beige%20and%20wood%2C%20serene%2C%20luxury%2C%20photorealistic%2C%208k&image_size=landscape_4_3",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Urban%20penthouse%20living%20room%2C%20city%20skyline%20view%2C%20modern%20furniture%2C%20grey%20and%20white%2C%20sophisticated%2C%20interior%20design%2C%208k&image_size=portrait_4_3",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20office%20lobby%2C%20minimalist%20brand%20headquarters%2C%20spacious%2C%20professional%2C%20white%20and%20glass%2C%20interior%20design%2C%208k&image_size=landscape_4_3",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20cafe%20interior%2C%20wood%20accents%2C%20warm%20lighting%2C%20coffee%20bar%2C%20plants%2C%20cozy%2C%208k&image_size=square_hd",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury%20brand%20identity%20design%2C%20stationery%20mockup%2C%20business%20cards%2C%20elegant%20typography%2C%20minimalist%2C%208k&image_size=landscape_16_9",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Futuristic%20office%20interior%2C%20white%20and%20silver%2C%20tech%20startup%2C%20sleek%2C%20modern%20lighting%2C%208k&image_size=landscape_4_3",
  ],
  '/about': [
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Creative%20team%20meeting%20in%20modern%20minimalist%20office%2C%20collaborating%2C%20looking%20at%20blueprints%2C%20natural%20light%2C%20warm%20atmosphere%2C%208k&image_size=landscape_16_9",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20female%20interior%20designer%2C%20warm%20smile%2C%20elegant%2C%20modern%20office%20background%2C%208k&image_size=square_hd",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20male%20creative%20director%2C%20glasses%2C%20smart%20casual%2C%20creative%20studio%20background%2C%208k&image_size=square_hd",
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20female%20architect%2C%20confident%2C%20minimalist%20style%2C%20bright%20studio%2C%208k&image_size=square_hd",
  ],
  '/contact': [
  ],
};

export function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
    const img = new Image();
    img.src = url;
  });
}

export function preloadPage(path: string) {
  const urls = pageImages[path];
  if (urls && urls.length) {
    preloadImages(urls);
  }
}
