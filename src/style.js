const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  // Headings
  heading1: "font-inter font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-tight text-white w-full",
  heading2: "font-inter font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-tight text-white w-full",
  heading3: "font-inter font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg text-white w-full",
  
  // Typography
  paragraph: "font-inter font-normal text-white/70 text-lg leading-relaxed",
  paragraphSmall: "font-inter font-normal text-white/60 text-base leading-relaxed",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexBetween: "flex justify-between items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-10",
  padding: "sm:px-16 px-6 sm:py-12 py-8",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-8",

  // Sections
  section: `flex md:flex-row flex-col ${"sm:py-16 py-10"} ${"sm:px-16 px-6"}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${"sm:py-16 py-10"} ${"sm:px-16 px-6"}`,
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
