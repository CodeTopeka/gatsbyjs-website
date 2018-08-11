// import React from "react"
// import Layout from "../components/layout"

// // export default () => (
// // <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
// //     <h1>Richard Hamming on Luck</h1>
// //     <div>
// //       <p>
// //         From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
// //           You and Your Research
// //         </a>”.
// //       </p>
// //       <blockquote>
// //         <p>
// //           There is indeed an element of luck, and no, there isn’t. The prepared
// //           mind sooner or later finds something important and does it. So yes, it
// //           is luck.{" "}
// //           <em>
// //             The particular thing you do is luck, but that you do something is
// //             not.
// //           </em>
// //         </p>
// //       </blockquote>
// //     </div>
// //     <p>Posted April 09, 2011</p>
// //   </div>
// // )


// export default () => (
//   <Layout>
//     <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//     <p>
//       What do I like to do? Lots of course but definitely enjoy
//       building websites.
//     </p>
//   </Layout>
// )
  


// import React from "react"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <h1>Amazing Pandas Eating Things</h1>
//     <div>
//       <img
//         src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
//         alt="Group of pandas eating bamboo"
//       />
//     </div>
//   </Layout>
// )





import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

import vilhelm_hammershoi_1 from "../img/2020903_KMS3696.jpeg"
import vilhelm_hammershoi_2 from "../img/2020903_KMS6657.jpeg"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <img src={vilhelm_hammershoi_1} alt="Painting 'Interior in Strandgade, Sunlight on the Floor' by Vilhelm Hammershøi, 1901" width="100%"/>
        <div className={css`
          max-width: 800px;
          margin: 0 auto;
          margin-top: -52px;
        `}>
          <h1>Holm School Open Educational Resources in 2018 and Beyond</h1>
          <p>
          One of the most pressing questions facing young computer scientists is whether they are going to go into debt studying computer science. College is a wonderful experience but increasingly that experience is being paywalled behind exorbitant tuition fees and housing costs. What used to be accessible and provide a quality life experience is no longer affordable to lower class computer scientists. It is a shame that science is being hidden behind paywalls, in which quality education can only be experienced by going deeply into debt. Fortunately computer science usually has a good return on investment compared to other fields like the liberal arts, in which people go more than a hundred thousand dollars in debt sometime to study for few jobs in the long run. Computer science, however, is an inventor's daydream and many quality products have been invented that address the cost of a computer science education. In fact, I would have to say that at present, there is no reason to go into debt to study computer science. My budget to study computer science is currently $200 a year, and that's as a direct result of the benefit of having a paying computer science job. Let me explain how computer science has solved the dilemma of having to pay for a computer science education.
          </p>
          <p>
          Open source programming has had many positive effects on society. The affordability of creating software due to open source has allowed new inventions and products to flood the market that improve our lives all while keeping costs low thanks to open source technology. Open source technology is often thought of as simply a software, but did you know that there are also open source books? Just as code is available for copying and distribution, there are computer science books that are available for copying and distribution for free! The authors of these books are people who have been influenced by open source as an ideology, and they have extended the copyrights found in software to cover books and educational technology. Does it surprise you that people who invent open source technology often open source the educational guide that teaches you how to use their open source technology? Or create it yourself? Whether that surprises you or not, that is simply the fact facing students of computer science. Computer science, being the technology that invented open source software, is also the field which leads the pack in open sourcing books for study. Computer science is the easiest field to study for free. It is the most robust in its offerings and is the most thorough in creating quality educational resources for students. If you are studying computer science and not taking advantage of these free open source books and videos, you are simply hurting yourself. To reject free resources in order to appease the traditions inherent in academia is a cult-like devotion that isn't necessarily bad in and of itself, however it will certainly hurt your wallet. Whether you feel your money is better kept in your own account or someone else's is a question only you can decide. If you are willing to embrace the future and study computer science using open education resources, you will find that a quality education can still be yours while saving tens if not hundreds of thousands of dollars. OER doesn't mean that you have to sacrifice collegiality as a whole. There are many ways (some as simple as joining a makerspace or hanging out at your local college library even if not a student) that will keep you experiencing life as a young person.
          </p>
          <p>
          The goal, therefore, is a college equivalent experience for free or as cheap as possible. If you need help on figuring out why frugality is a value worth cultivating in general, I suggest reading some frugality blogs and how one benefit includes early retirement. It's hard to explain why OER is a worthwhile path to self betterment if you aren't on board with frugality. I am basically telling you that, instead of paying full price for designer clothes, you go to the thrift store and buy the same designer clothes for $5 instead of $50. If that somehow offends your sensibilities, I will probably never convince you of the ability to get a college-equivalent education using OER. If you are someone that buys designer clothes, designer cars, designer computers, or designer foods, then you are going to be a difficult individual to convince to skip the designer colleges. If you find yourself in this mindspace and don't want to be anymore (perhaps you're always in debt, have loans and credit card bills, or never have any equity or savings), then the only thing I can tell you is to google search "frugality blogs" and start living according to the frugality tips you'll find as a means of paying your debts and building up your savings. The funny thing is how little sacrifices are actually required. You'll still wear the same designer clothes, only you'll purchase them slightly used instead of new. You'll still drive an automobile, only it will be a used model purchased for $9,000 instead of a new model purchased for $35,000. You'll still eat well, only it will be beans and lentils and vegetables you cook yourself instead of lunches at restaurants. If living frugally is somehow a problem for you, then you'll need to begin a full-hearted exploration of frugality in modern times and why you would want to live debt-free in the first place. If frugality is something we can agree on and you already put into daily practice, then keep reading and learn about how to frugally become a computer scientist.
          </p>
          <p>
          Living frugally doesn't mean you live the same as a big spender. Used designer clothes will never be as nice as new designer clothes. But what comes with frugality is the power to use your prefrontal cortex and analyze the disparities and come to the conclusion, "slightly used designer clothes that I purchase for $5 at the thrift shop are not really that much different from new designer clothes, especially to justify ten times the expense." Are clothes from the thrift shop ten times as used? No, they are often barely even worn. In much the same way you are going to have to use your prefrontal cortex to analyze whether a brick and mortar college is really that much different than online study, especially to justify fifteen to twenty-five times the expense. And this isn't fifteen times $5, but fifteen times thousands of dollars. The stakes are much higher. And playing with something with such high stakes should send alarm bells off in your head. Does reading books really require spending thousand of dollars? If you've spent your whole life going to the public library to read for free, you might be a little flabbergasted to learn that at age eighteen the free book train ends and instead you suddenly have to go hundreds of thousand of dollars into debt just to continue reading books. Why does it cost so much to read books? Are the books really that rare in college, or more valuable? Are textbooks really so amazing that they justify spending hundreds of dollars, on top of tuition, in order to read and discuss them? Those warning bells going off in your heads should be heeded. College textbooks sound a lot like designer clothes, don't they? While library books sound like the good ole $5 thrift store clothes (same brand, just slightly used instead of new). But supposedly along with the responsibilities of turning 18 is the responsibility to use that credit card and take out a huge loan to start buying designer textbooks and classes. Maybe you're power tripping a bit when you decide to go to that private college, just like when instead of going to the public library for a book you go to Barnes and Noble. Maybe you've fallen for the bait that part of being an adult is to get yourself into debt as quickly as possible. Maybe you think reading public library books if for little children, or not-smart people. There are a lot of self doubts that add up to you signing up for a non-defaultable loan worth tens of thousands of dollars at the age of 18, without even a job.
          </p>
          <p>
          I'm going to make an observation of a trend much in line with Moore's Law: As much as college tuition increases from year to year, the quality of free computer science OER increases too from year to year. That is, as tuition for a computer science degree at brick and mortar schools increases, the quality of education you can receive from free OER resources improves just as much. That's because people who would normally be devoting their life work to improving the college experience for paying students are now putting their effort towards improving OER. This might befuddle you at first, because the economics just don't make sense. How can you improve upon a product that returns nothing on the investment? But OER does make return on investment, it teaches more people to be computer scientists and those people in turn become developers that create new technology that improves the lives of everyone in the world. Computer Science is not zero sum, the more quality computer scientists in the world the better the world becomes. Adding new computer scientists does not decrease the quality of life for existing computer scientists. Teaching kids how to become computer scientists for free does not threaten the financial well-being of a professional computer scientist. In fact, it increases the job opportunity as those new computer scientists invent new technologies that create new jobs. Computer scientists know this more than any other profession, and that's why computer science invented open source. Open source promotes the view that CS education is not zero sum. If you can grasp this notion, then you are much more willing to trust in the effort of OER authors to create a world in which a world class computer science education is available for free to anyone. I and many other people share that goal, because we are convinced the world where such an education is possible is better than a world where it is not. And having that trust in OER has the potential to greatly improve your life, because it will keep you away from the monster that is student debt.
          </p>
          <p>
          My next angle of attack in convincing you to use OER is the notion that OER texts are just as good as those $150 textbooks that keep getting assigned for intro classes. Again, it's easy to default to my usual argument that textbooks are designer clothes while OER are thrift store clothes. Same brand, just slightly used. If used clothes give you the heebie-jeebies, you might need more convincing that new clothes aren't worth ten times the expense. But if you're on board, let me share my enthusiasm that there is plenty of OER to do the duty of teaching you the equivalent of those costly freshman textbooks. Especially considering OER is free while a textbook will set you back the equivalent of twenty hours of minimum wage labor. For the cost of a single textbook for a semester-long class, you could buy an ipad on which to read free OER for years to come. Your ibooks app could be flush with OER, teaching you multiple programming languages and most computer science concepts. You could program on a $35 raspberry pi, and keep the total cost of an undergraduate degree $250 for hardware plus internet costs. Considering college costs more than $60,000, you have to ask yourself if you would rather spend $500 for hardware or $60,000 for college tuition (120 times the expense). If you take the time to read some recommended OER, I think you'll discover that OER meets educational requirements, especially when the more inexpensive option would require 67 hours of labor at minimum wage and the more expensive would require 8040 hours). That's basically less than two weeks of labor versus 201 weeks (four years) of labor. I would rather work two weeks to fund my computer science education rather than four years. But if "used clothes" disgust you, I'll never convince you that OER represents the same quality as designer clothes for a fraction of the cost. At which I would refer to you the significant improvement in life that could come from working two weeks instead of four years. Get over that disgust of buying used clothes if it means you'll have four years of free time. Get over the disgust of not having a bricks and mortar college degree if it means you'll have the equivalent of four years of free time, while maintaining the same level of education and learning.
          </p>
          <p>
          But let's explore that disgust reaction. I'm willing to admit that it seems like a logical reaction when approaching OER for the first time. That because of a combination of multiple factors. The first is because of something I call the fallacy of the used science textbook. When people hear about free textbooks, they usually recall their empirical experience of seeing a used science textbook in the used bookstore. An example would be an anatomy textbook from 1973, which is for sale at the used bookstore for $4. While this textbook was obviously a quality college-level product in 1973, one in which the original owner probably paid a hefty sum, the price tag of $4 justifies that observation that many of the facts in the book are probably outdated and it certainly lacks all new discoveries in anatomy made since 1973. You pay $4 for a textbook, but get an outdated product. So when people initially encounter a $0 ebook, they automatically assume it's half a decade out of date. But that disgust and skepticism to OER fails to account for a couple of mitigating differences. The first is that OER is an ebook, it is not in paperback form. Ebooks are a new experience to many people. The ipad has only been out for ten years and before that no one was patient enough to read 350 page pdfs on a laptop. People simply aren't aware of the technology, and they are equating it with it's previous incarnation of paperback books, a wholly different technology. When more people become acquainted with ebooks, they will begin to understand why free is a justifiable pricetag-- there is no production cost. The second difference is that OER has an open source license. Having open source licenses attached to book means a book no longer risks going out of date. Other doctors can follow up with the original anatomy textbook and fork their own book, which they can make updates to and again publish their updated textbook as a free OER ebook. Open licenses allow for reproduction as well as modification of the original book, allowing an important textbook to never go out of date as long as there are willing maintainers (even if the original author quits or dies). Since web hosting is free, the OER will always be accessible to anyone interested in learning from any number of legacy maintainers. That anatomy textbook doesn't have an open source license, and that's why it's sitting in the used bookstore for $4. OER is not like that $4 anatomy textbook from 1973 afterall. That's the power of open source licensing permitting derivatives of the work. If it were OER, you can guarantee it or a derivative of it would be available for free somewhere on the internet, fully updated with modern information. OER is completely new technology compared to paperbacks and is destined to permit frugal studying for anyone with an internet connection. You should not be disgusted by $0 open-license textbooks, but infinitely fascinated and inspired. And convinced just a little that this new technology might just nullify the need for the high cost of CS degrees from brick and mortar colleges.
          </p>
          <p>
          There is nothing in this for me. I don't gain anything by having you skip college and study online. But as someone that spent $8k getting enough CS education to get my first job, after researching it more I came to the conclusion that I could have gotten that job for much much less money. And as someone with a disability who has not been able to work before learning CS, the money is very very important to me because I have so little of it. I've now committed to not spending any money on computer science education and only using free resources online. I spent $200 on pluralsight the past year, but I have barely used it compared to the amount I have spent instead working on Treehouse and Lynda which are provided free through my public library. Next year I will spend $0 on computer science education. Does that mean I'm not a computer scientist? Hardly, I spend more time than ever studying programming. I am more skilled than I ever have been, though I am spending less money than I ever have in the past on learning programming. I am convinced that spending money on a computer science education is not a solution to any of my problems. I am convinced that affording a down payment on an inexpensive home is my most pressing problem, and the money I save studying computer science for free online is enough, when combined with my frugality, to save money for that purpose. Because I have no debt from college, I am able to save up enough for a down payment in just two years of employment. I have zero debt because I have never spent on credit. I save 55% of my after-tax earnings. If I had cheaper housing than what I have at the moment, I would raise that even further. Many frugality bloggers save 70% or more. These goals don't afford a lot of room for education. But fortunately, at the end of the day after work I don't really have that much time to devote to education anyway; just a few hours at most. For someone employed, the resources provided by my public library and OER suffice for any professional development I might need. My goal at the moment is saving for a down payment on a small house, and the only thing that interferes with that goal is my team's weekly lunch at the Indian buffet (and $11 a week isn't that bad). Everything else is streamlined for savings: no driving except to the store, no non-library books except for pluralsight (which I'm not going to continue after December), beans and lentils everyday for lunch and dinner. It's not glamorous by any means, but I accomplishing my goal of saving significant money.
          </p>
          <p>
          All of this is a bit tangential to OER, but discussions of frugality need to be inspired by open source licensing more than they currently do. There are significant savings to someone who becomes "literate" to OER and free online educational curriculums like MOOCs. You get hired by having a good resume, and you get a good resume by spending the time doing tutorials on programming languages and frameworks. You can significantly increase the amount of time you have doing those tutorials if you aren't having to work a student job to pay for your tuition at a college.
          </p>
          <p>
          When I was a senior in high school, my teacher had me read "Colleges That Change Lives" as a way of introducing me to the notion of not engaging with the competitivity of college admissions/rankings. I'm glad she did, because I ended up saving a lot of money going to a smaller, less competitive liberal arts school and I also made a great bunch of friends. Although the school didn't have a computer science department, which obligated me going back to school at my hometown  college in order to learn object-oriented programming, I still managed to gain a lot from excusing myself from the rat race that competitive colleges engender. I would like Holm School to be the sort of "Colleges That Change Lives" for computer science students. If you want to change your life and avoid the beast that is student debt, acquainting yourself with OER and online education is a great way to let yourself develop to be the type of person you want or dream to be. Free CS education from my public library allowed me to get a job after two years of studying CS. The money I saved by using my public library, coupled with those cheap local college classes, permitted me to begin saving towards a home much faster than if I had ever gone to a private college and majored in CS. If you are interested in frugality, which DOES apply to computer science education, you should not only read "Colleges That Change Lives" but also contribute to the Holm School community, whether by use of the social features or by directly contributing code and OER recommendations. If your goal is to change your life for the better through studying computer science, I firmly believe OER is the most likely path to enable your success. If you come to the conclusion, as I have, that brick and mortar university are never a solution to any problem encountered by a computer science student and should be avoided at all costs (except for when they're full-ride, or they're extremeley affordable and you don't go into debt for them), then Holm School has met its goals as an educator about CS education.
          </p>
        
        </div>
        <img src={vilhelm_hammershoi_2} alt="Painting 'The Buildings of the Asiatic Company, seen from St. Annæ Street, Copenhagen' by Vilhelm Hammershøi, 1902" width="100%" className={css`margin-bottom: 0px;`} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")

          }
          fields {
            slug
          }
          excerpt
          wordCount {
            words
          }
        }
      }
    }
  }
`
