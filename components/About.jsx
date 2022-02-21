import Image from "next/image";
import TwoDimension from "img/two-dimension.png";
import ThreeDimension from "img/three-dimension.png";
import FourDimension from "img/four-dimension.png";
import FiveDimension from "img/five-dimension.png";
import MJ from "img/mj.gif";

export default function About() {
  return (
    <div>
      <p>The testeract is an application that generates a set of all possible sets. For instance, if I&apos;m writing some software, and need to think of all the browser/device/breakpoint combinations, rather than writing them all out, I can input a list of browsers, a list of devices, and a list of breakpoints, and it will spit out every possible combination of those variables. The name is a combination of &quot;test&quot; and &quot;<a href="https://en.wikipedia.org/wiki/Tesseract" target="_blank">tesseract</a>.&quot;</p>

      <p>Combining multiple dimensions of data in this way is called &quot;finding the <a href="https://www.sciencedirect.com/topics/computer-science/cartesian-product" target="_blank"> cartesian product</a>.&quot; or a <a href="https://www.geeksforgeeks.org/sql-join-cartesian-join-self-join/" target="_blank">cartesian join</a> in SQL. As far as I can tell, there were no GUI tools prior to this one that make it simple to find the cartesian product for arbitrary data sets. You can do it manually, but it's not really maintainable.</p>
      
      <p>For instance, say you were building an online store, and you wanted to generate a list of every product you plan to sell. Suppose you want to sell shirts in two sizes (large and small) and two colors (blue and green). The set of sets contains 4 items: large blue, small blue, large green, small green. For data with only two dimensions (like size and color) it&apos;s pretty easy to represent in a spreadsheet with columns and rows:</p> 
      
      <div className="image-wrapper">
        <Image alt="Image of an table having three rows and three columns" layout="responsive" src={TwoDimension}/>
      </div>

      <p>But this approach really starts to break down after 2 dimensions. Suppose we also wanted to offer each color/size combo in different styles: vneck, crew neck, and turtle neck. You might figure the answer is to create multiple two dimensional tables:</p>

      <div className="image-wrapper">
        <Image alt="Image of three tables, each having three rows and three columns" layout="responsive" src={ThreeDimension}/>
      </div>

      <p>But what happens when we add a fourth dimension?</p>

      <div className="image-wrapper">
        <Image alt="Image of six tables, each having three rows and three columns" layout="responsive" src={FourDimension}/>
      </div>
      
      <p>And a fifth dimension?</p>

      <div className="image-wrapper">
        <Image alt="Image of twelve tables, each having three rows and three columns" layout="responsive" src={FiveDimension}/>
      </div>
      <p>NOW, after making all these tables, what if someone told you you had to add a new size? Really pause and think for a moment what that would take.</p>
      
      <div className="image-wrapper mj">
        <Image alt="Image of michael jordan crying in the rain" layout="responsive" src={MJ}/>
      </div>

      <p>This is what I mean when I say tables are &quot;not maintainable.&quot; You can brute force it once, but modifying it basically means starting over.</p>

      <p>This is a hard problem for a human, but an easy problem for a computer. The core issue is that the set of sets expands exponentially as more dimensions and values are added. With, say, 4 dimensions each having 5 possible values, there are 625 possible combinations (5^4). With 5 dimensions each having 5 possible values, there 3,125.</p>

      <p>I made testeract to help with my own work as a software developer. I constantly need to generate multi-dimensional test cases, for browser/device/os combinations, page/user/locale combinations, software version/hosting environment combinations, and countless other situations. So I threw together a quick tool to help with that, I hope you get some use out of it.</p>
    </div>
  )
}