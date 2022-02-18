The testeract is an application that generates a set of all possible sets. The name is a combination of "test" and "tesseract" 

For instance, say you were building an online store, and you wanted to generate a list of every product you plan to sell. Suppose you sell want to sell shirts in two sizes (large and small) and two colors (black and white). The set of sets contains 4 items: large black, small black, large white, small white. This is called "the cartesian product."

For data with only two dimensions (like size and color) it's pretty easy to represent in a spreadsheet with columns and rows. But once you add more dimensions, it gets really hard to represent in a maintainable way.

Sticking with the example above, imagine we also wanted to store the dimensions sleeve (long or short), collar (v-neck or crew), and pocket (true or false). Now there are A LOT more options: large white long sleeve vneck pocket tee, small white long sleeve vneck pocket tee, large black long sleeve vneck pocket tee, and so on. 

The set of sets expands exponentially as more dimensions and values are added. With, say, 4 dimensions each having 5 possible values, there are 625 possible combinations (4^5). With **5** dimensions each having 5 possible values, there 3,125.