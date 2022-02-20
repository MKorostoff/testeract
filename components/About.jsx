import Image from "next/image";
import TwoDimension from "img/two-dimension.png";
import ThreeDimension from "img/three-dimension.png";
import FourDimension from "img/four-dimension.png";
import FiveDimension from "img/five-dimension.png";
import MJ from "img/mj.gif";

export default function About() {
  return (
    <div>
      <p>The testeract is an application that generates a set of all possible sets. The name is a combination of &quot;test&quot; and &quot;<a href="https://en.wikipedia.org/wiki/Tesseract" target="_blank">tesseract</a>&quot;</p>

      <p>For instance, say you were building an online store, and you wanted to generate a list of every product you plan to sell. Suppose you want to sell shirts in two sizes (large and small) and two colors (blue and green). The set of sets contains 4 items: large blue, small blue, large green, small green. This is called &quot;the <a href="https://www.sciencedirect.com/topics/computer-science/cartesian-product" target="_blank"> cartesian product</a>.&quot; For data with only two dimensions (like size and color) it&apos;s pretty easy to represent in a spreadsheet with columns and rows:</p> 
      
      <div className="image-wrapper">
        <Image layout="responsive" src={TwoDimension}/>
      </div>

      <p>But once you add more dimensions, it gets really hard to represent in a maintainable way. Suppose we also wanted to offer each color/size combo in different styles: vneck, crew neck, and turtle neck. You might figure the answer is to create multiple two dimensional tables:</p>

      <div className="image-wrapper">
        <Image layout="responsive" src={ThreeDimension}/>
      </div>

      <p>But what happens when we add a, fourth dimension?</p>

      <div className="image-wrapper">
        <Image layout="responsive" src={FourDimension}/>
      </div>
      
      <p>And a fifth dimension?</p>

      <div className="image-wrapper">
        <Image layout="responsive" src={FiveDimension}/>
      </div>
      <p>NOW, after making all these tables, what if someone told you you had to add a new size? Really pause and think for a moment what that would take.</p>
      
      <div className="image-wrapper mj">
        <Image layout="responsive" src={MJ}/>
      </div>

      <p>This is what I mean when I say tables are &quot;not maintainable.&quot; You can brute force it once, but modifying it basically means starting over.</p>

      <p>This is a hard problem for a human, but an easy problem for a computer. The core issue is that the set of sets expands exponentially as more dimensions and values are added. With, say, 4 dimensions each having 5 possible values, there are 625 possible combinations (5^4). With 5 dimensions each having 5 possible values, there 3,125.</p>

      <p>I made testeract to help with my own work as a software developer. I constantly need to generate multi-dimensional test cases, for browser/device/os combinations, page/user/locale combinations, software version/hosting environment combinations, and countless other situations. So I threw together a quick tool to help with that, I hope you get some use out of it.</p>
    </div>
  )
}