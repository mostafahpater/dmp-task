
import './App.css';
import { FaPlus, FaSignInAlt, FaGlobe, FaSearch, FaRegTimesCircle, FaBars, FaUserPlus, FaHome, FaBed, FaBath, FaRegHeart, FaArrowLeft, FaBullhorn, FaShower, FaWhatsapp, FaPhoneVolume, FaPhone, FaRegEnvelopeOpen, FaFacebookF, FaYoutube, FaSnapchatGhost, FaArrowRight } from 'react-icons/fa';
import { FaArrowUpLong, FaLocationDot, FaRegMoneyBill1, FaShareNodes, FaXmark } from 'react-icons/fa6';
import { BiSolidMessageDots } from 'react-icons/bi';
import Container from './components/global/Container';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RWebShare } from 'react-web-share';
import LocalizedStrings from 'react-localization';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useFormik } from 'formik';
function App({language,setLanguage}) {
  let strings = new LocalizedStrings({
    en:{
      estate:"advertise real estate",
      Real_Estate:"Real Estate Agent Property in Egypt penthouse",
      Home:"Home",
      Sell:"Sell",
      Rent:"Rent",
      Projects:"Projects",
      events:"Events",
      contact_us:"contact us",
      Switch_To_Arabic:"Switch To Arabic",
      login:"Login",
      lets_find:"Let’s find",
      dream_Home:"your dream home by Luxury Aqar Real Estate Agent..",
      luxury_aqar:"Luxury Aqar services allow you to buy or sell a property while providing essential information to help you make one of life’s biggest financial decisions.",
      serach_property:"Search for property",
      location:"Location",
      select_location:"Select Location",
      united_Arab_Emirates:"United Arab Emirates",
      egypt:"Egypt",
      type:"Type",
      select_Type:"Select Property Type",
      administrative:"Administrative",
      commercial:"Commercial",
      residential:"Residential",
      area_Size:"Area Size",
      select_Area_Size:"Select Area Size",
      above_50_m:"above 50 m",
      above_100_m:"above 100 m",
      above_150_m:"above 150 m",
      above_200_m:"above 200 m",
      above_250_m:"above 250 m",
      above_300_m:"above 300 m",
      above_350_m:"above 350 m",
      above_400_m:"above 400 m",
      search:"Search",
      properties:"PROPERTIES",
      for_Sell:"For Sell",
      title_card:"I city new cairo, Cairo",
      unit_Status:"Unit Status",
      bedrooms:"Bedrooms",
      bathrooms:"Bathrooms",
      show_More:"Show More",
      our:"OUR",
      services:"Services",
      digital_Marketing:"Digital Marketing",
      digital_Marketing_discript:"By Digital Post Marketing Company (DPM) you can take a 3d tour of your unit and generate leads easily",
      read_more:"Read More...",
      finishing:"Finishing",
      finishing_discript:"By Luxury aqar you can finish your unit with the best finishing",
      real_Estate_Finance:"Real Estate Finance",
      real_Estate_Finance_discript:"By Luxury aqar you can finish your unit with the best finishing",
      new:"NEW",
      serrano_Compound:"Serrano compound",
      new_Administrative_Capital:"New Administrative Capital",
      phone_Number:"Phone Number",
      location:"Location",
      email_Address:"Email Address",
      discript_About_Website:"By striving to raise the quality of life to a higher level with fully realized projects Luxury Aqar continues to be the title of luxury",
      site_Menu:"Site Menu",
      about_Us:"About Us",
      help:"Help",
      terms:"Terms and conditions",
      copyright:"All rights reserved Copyright © 2022 .",
      luxury_Aqar_name:"Luxury Aqar",
    },
    ar: {
      estate:"اعلن عن عقارك",
      Real_Estate:"انضم الينا الان , كل شيئ مجانى",
      Home:"الصفحة الرئيسية",
      Sell:"بيع",
      Rent:"إيجار",
      Projects:"المشاريع",
      events:"الأحداث",
      contact_us:"تواصل معنا",
      Switch_To_Arabic:"التحويل الى الانجليزية",
      login:"تسجيل الدخول",
      lets_find:"دعنا نبحث",
      dream_Home:"..عن منزل احلامك",
      luxury_aqar:"تتيح لك الخدمات المنزلية في لاكشيري عقار شراء أو بيع عقار مع توفير المعلومات الأساسية لمساعدتك في اتخاذ أحد أكبر القرارات المالية في الحياة.",
      serach_property:" إبحث عن عقار",
      location:"الموقع",
      select_location:"أختر الموقع",
      united_Arab_Emirates:"الإمارات العربية المتحدة",
      egypt:"مصر",
      type:"النوع",
      select_Type:"إختر النوع",
      administrative:"سكني",
      commercial:"تجاري",
      residential:"أداري",
      area_Size:"المساحة",
      select_Area_Size:"إختر المساحة",
      above_50_m:"أكبر من 50 قدم ",
      above_100_m:"أكبر من 100 قدم ",
      above_150_m:"أكبر من 150 قدم ",
      above_200_m:"أكبر من 200 قدم ",
      above_250_m:"أكبر من 250 قدم ",
      above_300_m:"أكبر من 300 قدم ",
      above_350_m:"أكبر من 350 قدم ",
      above_400_m:"أكبر من 400 قدم ",
      search:"بحث",
      properties:"عقارات",
      for_Sell:"للبيع",
      title_card:"I city new cairo, القاهره",
      unit_Status:"حالة العقار",
      bedrooms:"غرف نوم",
      bathrooms:"حمامات",
      show_More:"عرض المزيد",
      our:"ما هى",
      services:"خدماتنا",
      digital_Marketing:"التسويق الالكتروني",
      digital_Marketing_discript:"بواسطه ديجيتال بوست ماركيتنج (دي بي إم) يمكنك القيام بجولة ثلاثية الأبعاد في وحدتك والحصول على عملاء محتملين بسهولة",
      read_more:"أقرا المزيد...",
      finishing:"التشطيب",
      finishing_discript:"من خلال لاكشري عقار ، يمكنك إنهاء وحدتك بأفضل التشطيبات",
      real_Estate_Finance:"التمويل العقاري",
      real_Estate_Finance_discript:"من خلال دي بي إم، يمكنك التقاط عرض ثلاثي الأبعاد من وحدتك",
      new:"أحدث",
      serrano_Compound:"كمبوند سيرانو",
      new_Administrative_Capital:"العاصمة الإدارية الجديدة",
      phone_Number:"رقم الهاتف",
      location:"العنوان",
      email_Address:"البريد الإلكتروني",
      discript_About_Website:"من خلال السعي إلى رفع جودة الحياة إلى مستوى أعلى من خلال المشاريع المحققة بالكامل ، يستمر لاكشيري عقار للعقارات في أن يكون عنوان الرفاهية",
      site_Menu:"قائمة الموقع",
      about_Us:"من نحن",
      help:"المساعدة",
      terms:"الأحكام والشروط",
      copyright:"جميع الحقوق محفوظة © 2022 .",
      luxury_Aqar_name:"لاكشيري عقار",
    }
  });
  const [showSearch, setShowsearch] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const realEstate = [1, 2, 3, 4]
  const projects = [1, 2, 3]
  const [scrollPosition, setScrollPosition] = useState(0);
  strings.setLanguage(language)

    const handleScrolls = () => {
  const position = window.pageYOffset;
    setScrollPosition(position);
};
const handleScroll = () => {
  window.scrollTo({top:0,behavior:'smooth'})
};
useEffect(() => {
  window.addEventListener('scroll', handleScrolls, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScrolls);
  };
}, []);

const searchForm = useFormik({
  initialValues: {
    sell_rent: 'sell',
    
    location: '',
    type: '',
    area: '',
   
  },
  onSubmit: function (values) {
  console.log(values)
  }
})
  return (
    <div dir={`${language==='ar'?'rtl':null}`}>
      {scrollPosition>=300&&
   <div className='text-main fixed bottom-10 right-6 z-20 text-xl transition-all duration-300 cursor-pointer' onClick={handleScroll}>

      {/* <CircularProgressbarWithChildren value={scrollPosition}> */}
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <FaArrowUpLong />
{/* </CircularProgressbarWithChildren> */}
   </div>  
      }
      <div className='bg-second fixed top-0 left-0 right-0 z-50'>
        <Container>
          {/* navbar standerd */}
          <nav className='items-center justify-between  py-4 hidden md:flex'>
            <div className='flex  items-center'>
              <a>
                <img width={70} src='https://www.luxuryaqar.com/_next/image?url=%2Fimg%2Flogo2.png&w=96&q=75' alt='logo' />
              </a>
              <div className='flex flex-col items-center pr-2'>
                <a href='https://www.google.com' className='flex items-center  bg-main  p-2 rounded-3xl'>
                  <FaPlus className='bg-black text-main p-1 rounded-[4px]' />
                  <p className='pr-1 text-sm'>{strings.estate} </p>
                </a>
                <p className='text-xs text-third text-right'>{strings.Real_Estate}</p>
              </div>
            </div>
            <div className='flex '>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.Home}</a>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.Sell}</a>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.Rent}</a>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.Projects}</a>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.events}</a>
              <a className='text-third text-sm mx-3 relative hover:text-white after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 
                      after:bg-white hover:after:w-[80%]' href='https://www.google.com'>{strings.contact_us}</a>
            </div>
            <div className='flex '>
              <a className='flex items-center text-sm text-main  ml-4 ' href='https://www.google.com'>
                <FaSignInAlt className='mt-1' />
                <span className='mr-2'>{strings.login}</span>
              </a>
              <a className='flex items-center  text-third text-sm cursor-pointer' onClick={()=>{
                language==='ar'?setLanguage('en'):setLanguage('ar')
                }}>
                <FaGlobe className='mt-1 hover:rotate-180 transition-all' />
                <p className='mr-2'>{language.toUpperCase()}</p>
              </a>
            </div>
          </nav>
          {/* nav bar responsive */}
          <nav className='items-center relative justify-between  py-4 md:hidden flex'>
            <div className='text-white border-2 p-2 rounded-md border-white cursor-pointer'>

              <FaBars onClick={() => setShowNav(!showNav)} />
            </div>
            <div className='flex  items-center'>
              <a href='#'>
                <img width={70} src='https://www.luxuryaqar.com/_next/image?url=%2Fimg%2Flogo2.png&w=96&q=75' alt='logo' />
              </a>
            </div>
            <div className={` ${showNav ? 'flex' : 'hidden'} absolute flex-col top-0 right-0 w-full bg-[#2a2a2af8] `}>
              <div className='flex  justify-between items-center px-2 border-b pb-[22px]'>
                <a href='#'>
                  <img width={70} src='https://www.luxuryaqar.com/_next/image?url=%2Fimg%2Flogo2.png&w=96&q=75' alt='logo' />
                </a>
                <FaXmark onClick={() => setShowNav(!showNav)} className='text-white text-2xl cursor-pointer' />
              </div>
              <a className='text-third flex  items-center text-sm pr-2 border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main p-1 rounded-full ml-1'>
                  <FaHome className='text-third' />
                </div>
                {strings.Home}</a>
              <a className='text-third text-sm pr-2 flex  items-center border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main w-6 h-6 text-center rounded-full ml-1 text-third'>{language==='ar'?'بـ':'R'}</div>
                {strings.Sell}</a>
              <a className='text-third text-sm pr-2  flex  items-center  border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main w-6 h-6 text-center rounded-full ml-1 text-third'>{language==='ar'?'إ':'R'}</div>
                {strings.Rent}</a>
              <a className='text-third text-sm pr-2 flex  items-center border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main w-6 h-6 text-center rounded-full ml-1 text-third'>{language==='ar'?'أ':'P'}</div>
                {strings.Projects}</a>
              <a className='text-third text-sm pr-2 flex  items-center border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main w-6 h-6 text-center rounded-full ml-1 text-third'>{language==='ar'?'حـ':'E'}</div>
                {strings.events}</a>
              <a href='https://www.google.com' className='flex items-center  text-white border-b py-[22px] p-2'>
                <div className='bg-main text-white p-1 rounded-full mt-1'>

                  <FaPlus />
                </div>
                <p className='pr-1 text-sm'>{strings.estate}</p>
              </a>
              <a className='text-third text-sm  flex  items-center  border-b p-2 py-[22px]' href='https://www.google.com'>
                <div className='bg-main text-white p-1 rounded-full mt-1 ml-1'>

                  <BiSolidMessageDots />
                </div>
                {strings.contact_us}</a>
              <a className='flex items-center  text-third text-sm  border-b p-2 py-[22px]' href='https://www.google.com'>
                <div className='bg-main text-white p-1 rounded-full mt-1 ml-1'>

                  <FaGlobe className=' hover:rotate-180 transition-all' />
                </div>
                <p className='mr-2'>{strings.Switch_To_Arabic}</p>
              </a>
              <a className='flex items-center text-sm text-white  ml-4 p-2 border-b py-[22px]' href='https://www.google.com'>
                <div className='bg-main text-white p-1 rounded-full mt-1 ml-1'>
                  <FaSignInAlt />
                </div>
                <span className='mr-2'>{strings.login}</span>
              </a>
            </div>
            <div className='text-white border-main border p-2 rounded-full cursor-pointer'>

              <FaUserPlus />
            </div>
          </nav>
        </Container>

      </div>
      <div className='search-section h-[80vh] flex justify-center items-center'>
        <div className='w-[60%] flex flex-col items-center'>

          <div className=' flex flex-col justify-center items-center'>

            <p className='text-5xl text-white font-bold my-4 flex flex-col items-center'>
            {strings.lets_find}
            </p>
              <span className='text-main block text-5xl font-bold my-4 mt-3 text-center'>{strings.dream_Home}</span>
            <p className='text-third text-center w-[80%]'>{strings.luxury_aqar}</p>
          </div>
          <div className='md:hidden flex justify-center mt-4'>

            <button onClick={() => setShowsearch(!showSearch)} className='text-center px-5 py-2 rounded-2xl text-main bg-white'>
             {strings.serach_property}
            </button>
          </div>
          <div className={`${showSearch ? 'absolute bottom-0 right-0 w-full' : 'hidden'} md:block`}>
            <form onSubmit={searchForm.handleSubmit} className='relative bg-white md:bg-inherit'>

              <fieldset name='sell_rent' className='flex items-center justify-center' onChange={searchForm.handleChange}>
                <label
                  htmlFor='sell' className='m-3'>
                  <input name="sell_rent" type='radio' value='sell' checked={searchForm.values.sell_rent === 'sell'} id='sell' className='peer hidden'/>
                  <span className='md:text-white text-black peer-checked:border-2 peer-checked:border-main peer-checked:text-main py-1 px-4 cursor-pointer rounded-2xl'>
                    {strings.Sell}
                  </span>
                </label>
                <label className='m-2'>
                  <input name="sell_rent" type='radio' value='rent' id='rent' className='peer hidden' />
                  <span className='md:text-white text-black peer-checked:border-2 peer-checked:border-main peer-checked:text-main py-1 px-4 cursor-pointer rounded-2xl'>

                    {strings.Rent}
                  </span>
                </label>
              </fieldset>

              <div className='bg-white p-4 border-4 border-main rounded-[30px] flex justify-between items-center flex-col md:flex-row'>
                <FaXmark onClick={() => setShowsearch(!showSearch)} className='absolute right-2 cursor-pointer -top-3 bg-black text-white w-8 h-8 rounded-full text-sm md:hidden' />
                <div className='w-full mr-4'>
                  <label htmlFor="first_name" className=" mb-2 text-sm text-gray-900">{strings.location}</label>
                  <select name="location" onChange={searchForm.handleChange} className="bg-white border border-main text-sm rounded-lg w-full p-2.5 focus:border-main active:border-main">
                    <option selected>{strings.select_location}</option>
                    <option value={strings.united_Arab_Emirates}>{strings.united_Arab_Emirates}</option>
                    <option value={strings.united_Arab_Emirates}>{strings.egypt}</option>

                  </select>
                </div>
                <div className='w-full mr-4'>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">{strings.type}</label>
                  <select name="type" onChange={searchForm.handleChange} className="bg-white border border-main  text-sm rounded-lg w-full p-2.5 focus:border-main active:border-main">
                    <option selected>{strings.select_Type}</option>
                    <option value="administrative">{strings.administrative}</option>
                    <option value="commercial">{strings.commercial}</option>
                    <option value="residential">{strings.residential}</option>
                  </select>
                </div>
                <div className='w-full mr-4'>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">{strings.area_Size}</label>
                  <select name="area" onChange={searchForm.handleChange} className="bg-white border border-main  text-sm rounded-lg w-full p-2.5 focus:border-main active:border-main">
                    <option selected>{strings.select_Area_Size}</option>
                    <option value="above 50 m">{strings.above_50_m}</option>
                    <option value="above 100 m">{strings.above_100_m}</option>
                    <option value="above 150 m">{strings.above_150_m}</option>
                    <option value="above 200 m">{strings.above_200_m}</option>
                    <option value="above 250 m">{strings.above_250_m}</option>
                    <option value="above 300 m">{strings.above_300_m}</option>
                    <option value="above 350 m">{strings.above_350_m}</option>
                    <option value="above 400 m">{strings.above_400_m}</option>
                  </select>
                </div>
                <div className='text-sm mt-6 mr-4'>
                  <button className='mr-2 bg-main py-3 px-5  rounded-2xl flex items-center'>{strings.search}  <FaSearch /></button>
                 
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>
      <div className='bg-second relative after:h-[4px] after:absolute after:right-0 after:-top-[2px]
    after:bg-main after:w-[70%] before:h-[4px] before:absolute before:left-0 before:-bottom-[2px]
    before:bg-main before:w-[70%] pr-3 pb-10'>


        <Container>

          <div className='pt-10'>
            <p className={`text-white text-sm after:rounded-3xl relative after:w-[6px] after:absolute ${language==='ar'?'after:right-0  pr-3':'after:left-0  pl-3'} after:top-0  
    after:bg-main after:h-[100%]`}>{strings.properties} <div className='text-main text-4xl font-semibold'>{strings.for_Sell}</div></p>
            <div className='grid sm:flex grid-cols-1 justify-items-center justify-center sm:justify-between flex-wrap'>
              {realEstate.map((item, index) => (
                <div key={index} className='bg-white w-fit p-3 mt-10 border-2 border-main rounded-xl hover:-translate-y-4 transition-all duration-150'>
                  <div className='relative w-60 rounded-xl'>

                    <img className='cursor-pointer rounded-xl border-[3px] border-main' src='https://www.luxuryaqar.com/_next/image?url=https%3A%2F%2Fadmin.luxuryaqar.com%2Fproperty-images%2F709582841442LAGOON%20OHER%20SEA%20SIDE%20VIEW.jpeg&w=640&q=75' alt='card' />
                    <div className='bg-main text-white py-1 px-3 absolute top-3 right-3 rounded-2xl bg-opacity-50	hover:bg-opacity-100 transition-all duration-300'>
                      <span className='text-xs'>{strings.for_Sell}</span>
                    </div>
                    <div className='bg-black text-white py-1 px-3 absolute top-3 left-3 rounded-2xl bg-opacity-50	'>
                      <span className='text-xs'>{strings.residential}</span>
                    </div>
                    <a href='#' className=' py-1 px-3 absolute -bottom-6 left-3 rounded-2xl'>
                      <img className='rounded-full border-[6px] border-second w-12' src='https://www.luxuryaqar.com/_next/image?url=https%3A%2F%2Fadmin.luxuryaqar.com%2Fuser-images%2Fdefault.jpg&w=48&q=75' />
                    </a>
                  </div>
                  <div className='flex items-center mt-3'>
                    <FaLocationDot className='text-main' />
                    <a className='text-[#171819]' href='#'>{strings.title_card}</a>
                  </div>
                  <p className='text-[#011f2a] font-semibold mt-2'>EGP 2,889,168.28</p>
                  <a className='truncate w-60 inline-block mt-2 font-bold underline decoration-main' href='#'>
                    Lagoon Residence -Executive Court Middle D1 CA-01-01-A5-4
                  </a>
                  <div className='flex'>

                  <p className='mt-1 font-light text-base'>
                    {strings.unit_Status}
                  </p>
                  <p className='mt-1 font-light text-base'>
                    :Under constructions
                  </p>
                  </div>
                  <div className='mt-2 flex justify-between items-center'>
                    <div className='flex  bg-third bg-opacity-25 rounded-2xl p-2'>
                      <div >
                        <span className='font-bold'>3</span>
                        <FaBed className='text-main text-xl inline-block mr-1' />
                        <p className='text-sm'>{strings.bedrooms}</p>
                      </div>
                      <div className={`${language==='ar'?'mr-3':'ml-3 '}`}>
                        <span className='font-bold'>2</span>
                        <FaBath className='text-main text-xl inline-block mr-1' />
                        <p className='text-sm'>{strings.bathrooms}</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <RWebShare
                        data={{
                          text: "share ",
                          url: "http://localhost:3000",
                          title: "share",
                        }}
                        >

                        <a className='text-second bg-main p-2 rounded-full font-thin cursor-pointer'>

                          <FaShareNodes />
                        </a>
                      </RWebShare>
                    
                      <a href='#' className={`text-second bg-main p-2 rounded-full font-thin ${language==='ar'?'mr-3':'ml-3'}`}>

                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-center mt-6'>
              <a href='#' className='bg-main py-3 px-5 rounded-3xl'>{strings.show_More}</a>
            </div>
          </div>
        </Container>


      </div>
      <div className='services'>
        <div className='bg-[#011f2ac8] h-full'>

          <Container>
            <div className='pt-14 pb-20'>

              <p className={`text-white text-sm after:rounded-3xl relative after:w-[6px] after:absolute ${language==='ar'?'after:right-0  pr-3':'after:left-0  pl-3'} after:top-0  
    after:bg-main after:h-[100%]`}>{strings.our}
                <div className='text-main text-4xl font-semibold'>{strings.services}</div>
              </p>
              <div className='flex flex-col md:flex-row justify-between mt-8'>

                <div className='relative bg-third hover:bg-white transition-all duration-300 w-fit md:w-[30%] rounded-3xl p-4'>
                  <p className='text-2xl font-bold '>{strings.digital_Marketing}</p>
                  <p className='text-sm mt-2'>{strings.digital_Marketing_discript}</p>
                  <a className='text-sm mt-2 text-main' href='#'>{strings.read_more}
                    {language==='ar'?<FaArrowLeft className='inline-block mr-2' />
                    :<FaArrowRight className='inline-block ml-2'/>}
                  </a>
                  <div className='absolute -top-6 left-6 bg-main text-white p-[14px] rounded-full'>

                    <FaBullhorn className='text-2xl' />
                  </div>
                </div>
                <div className='relative bg-third hover:bg-white transition-all duration-300 w-fit md:w-[30%] rounded-3xl p-4 translate-y-6'>
                  <p className='text-2xl font-bold '>{strings.finishing}</p>
                  <p className='text-sm mt-2'>{strings.finishing_discript}</p>
                  <a className='text-sm mt-2 text-main' href='#'>{strings.read_more}
                  {language==='ar'?<FaArrowLeft className='inline-block mr-2' />
                    :<FaArrowRight className='inline-block ml-2'/>}
                  </a>
                  <div className='absolute -top-6 left-6 bg-main text-white p-[14px] rounded-full'>

                    <FaShower className='text-2xl' />
                  </div>
                </div>
                <div className='relative bg-third hover:bg-white transition-all duration-300 w-fit md:w-[30%] rounded-3xl p-4 translate-y-12'>
                  <p className='text-2xl font-bold '>{strings.real_Estate_Finance}</p>
                  <p className='text-sm mt-2'>{strings.real_Estate_Finance_discript}</p>
                  <a className='text-sm mt-2 text-main' href='#'>{strings.read_more}
                  {language==='ar'?<FaArrowLeft className='inline-block mr-2' />
                    :<FaArrowRight className='inline-block ml-2'/>}
                  </a>
                  <div className='absolute -top-6 left-6 bg-main text-white p-[14px] rounded-full'>

                    <FaRegMoneyBill1 className='text-2xl' />
                  </div>
                </div>
              </div>

              <div>

              </div>
            </div>

          </Container>
        </div>
      </div>
      <div className='projects relative h-full pb-28'>
        <div className='pt-10 bg-third bg-opacity-60 h-full'>

          <Container>
            <p className={`text-black text-sm after:rounded-3xl  relative after:w-[6px] after:absolute ${language==='ar'?'after:right-0  pr-3':'after:left-0  pl-3'} after:top-0  
    after:bg-main after:h-[100%]`}>{strings.new} 
              <div className='text-main text-4xl font-semibold'>{strings.Projects}</div>
            </p>
            <div className='flex justify-between flex-wrap'>
              {projects.map((item, index) => (


                <div key={index} className='bg-second bg-opacity-80 w-fit p-3 mt-10 border-4 border-main rounded-xl'>
                  <div className='relative w-80 rounded-xl'>
                    <a href='#'>

                      <img className='rounded-2xl' src='https://www.luxuryaqar.com/_next/image?url=https%3A%2F%2Fadmin.luxuryaqar.com%2Fproject-images%2F366410354477.jpg&w=640&q=75' alt='card' />
                    </a>
                    <a href='#' className='text-2xl text-white mt-2'>{strings.serrano_Compound}</a>
                  </div>
                  <p className='text-third mt-2'>{strings.new_Administrative_Capital}</p>
                </div>
              ))}
            </div>

          </Container>
        </div>

      </div>
      <footer className='bg-second'>
      <Container>

        <div className='contact relative -top-20 bg-second w-full flex md:flex-row flex-col items-center justify-around py-4 px-8 rounded-3xl border-2 border-main'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <FaPhone className='rotate-90 text-main text-[32px]' />
              <p className='text-2xl font-bold text-white mt-2'>{strings.phone_Number}</p>
            </div>
            <div className='grid grid-cols-2 mt-2 gap-2 '>
              <div className='flex items-center'>
                <FaWhatsapp className='text-main' />
                <a className='text-white text-sm mr-1' href='https://api.whatsapp.com/send/?phone=201095183439'>+201095183439</a>
              </div>
              <div className='flex items-center'>
                <FaPhone className='text-main rotate-90 ' />
                <a className='text-white text-sm mr-1' href='tel:201000884688'>+201000884688</a>
              </div>
              <div className='flex items-center'>
                <FaWhatsapp className='text-main' />
                <a className='text-white text-sm mr-1' href='https://api.whatsapp.com/send/?phone=201095183439'>+201095183439</a>
              </div>
              <div className='flex items-center'>
                <FaPhone className='text-main rotate-90' />
                <a className='text-white text-sm mr-1' href='tel:201000884688'>+201000884688</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center md:mt-0 mt-6'>
            <FaLocationDot className=' text-main text-[32px]' />
            <p className='text-2xl font-bold text-white mt-2'>{strings.location}</p>
            <div className='flex flex-col mt-2'>
              <a href='https://www.google.com/maps/place/Digital+Post+Marketing+Management/@25.11644,55.2023166,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5d0b05a18425:0x6d6a17959f1fdcda!8m2!3d25.11642!4d55.2045328?hl=en-GB' className='truncate inline-block w-80 md:w-60 lg:w-80  text-white'>Rania Business Center - AL BARSHA - Dubai - United Arab Emirates</a>
              <a href='https://www.google.com/maps/place/Digital+Post+Marketing+Management/@25.11644,55.2023166,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5d0b05a18425:0x6d6a17959f1fdcda!8m2!3d25.11642!4d55.2045328?hl=en-GB' className='truncate inline-block w-80 md:w-60 lg:w-80 mt-2 text-white'>Rania Business Center - AL BARSHA - Dubai - United Arab Emirates</a>
            </div>
          </div>
          <div className='flex flex-col items-center md:mt-0 mt-6'>
            <FaRegEnvelopeOpen className=' text-main text-[32px]' />
            <p className='text-2xl font-bold text-white mt-2'>{strings.email_Address}</p>
            <div className='flex flex-col mt-2'>
              <a href="mailto:info@luxuryaqar.com" className='text-white text-sm'>info@luxuryaqar.com</a>
              <a href="mailto:info@luxuryaqar.com" className='text-white text-sm mt-2'>info@luxuryaqar.com</a>
            </div>
          </div>
        </div>
      </Container>
        <Container>
<div className='grid grid-cols-6 md:flex justify-around justify-items-center p-8'>

        <a className='col-start-1 col-end-7'>
          <img width={100} src='https://www.luxuryaqar.com/_next/image?url=%2Fimg%2Flogo2.png&w=96&q=75' alt='logo' />
        </a>
        <p className='text-white text-sm w-full md:w-1/4 col-start-1 col-end-7 md:mt-0 mt-3'>{strings.discript_About_Website}</p>
        <ul className='col-start-1 col-end-3 flex items-center flex-col md:mt-0 mt-3'>
          <li className='text-white'>{strings.site_Menu}</li>
          <li className='text-white text-sm mt-1  hover:underline hover:decoration-main hover:text-main'>
            <a href='#'>
{strings.about_Us}
            </a>
          </li>
          <li className='text-white text-sm mt-1  hover:underline hover:decoration-main hover:text-main'>
            <a href='#'>
            {strings.Projects}

            </a>
          </li>
          <li className='text-white text-sm mt-1  hover:underline hover:decoration-main hover:text-main'>
            <a href='#'>
            {strings.Sell}

            </a>
          </li>
          <li className='text-white text-sm mt-1  hover:underline hover:decoration-main hover:text-main'>
            <a href='#'>
            {strings.Rent}
            </a>
          </li>
        </ul>
        <ul className='col-end-7 col-span-2 flex items-center flex-col md:mt-0 mt-3'>
          <li className='text-white'>{strings.help}</li>
          <li className='text-white text-sm mt-1 hover:underline hover:decoration-main hover:text-main'>
          <a href='#'>
          {strings.terms}

</a>
          </li>
          <li className='text-white text-sm mt-1 hover:underline hover:decoration-main hover:text-main'>
          <a href='#'>
          {strings.contact_us}
</a>
          </li>
        </ul>
</div>
        </Container>
        <div className='bg-black py-2'>

        <Container>
<div className='flex md:flex-row items-center flex-col justify-between'>
  <p className='text-white'>
  {strings.copyright}
  <a className='text-main' href='#'>
  {strings.luxury_Aqar_name}
  </a>
  </p>
  <div className='flex md:mt-0 mt-4'>
    <div className={`bg-main text-black hover:bg-white cursor-pointer transition-all duration-300 p-1.5 rounded-full ${language==='ar'?'ml-3':'mr-3'}`}>
      <FaFacebookF/>
      </div>
    <div className={`bg-main text-black hover:bg-white cursor-pointer transition-all duration-300 p-1.5 rounded-full ${language==='ar'?'ml-3':'mr-3'}`}>
<FaYoutube/>
    </div>
    <div className={`bg-main text-black hover:bg-white cursor-pointer transition-all duration-300 p-1.5 rounded-full ${language==='ar'?'ml-3':'mr-3'}`}>
      <FaWhatsapp/>
    </div>
    <div className={`bg-main text-black hover:bg-white cursor-pointer transition-all duration-300 p-1.5 rounded-full`}>
      <FaSnapchatGhost/>
    </div>
  </div>
</div>
</Container>
</div>

      </footer>
    </div>
  );
}

export default App;
