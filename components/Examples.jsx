const Data = {
  "PaintColors": [
    {name: "Color", values: ["Blue", "White", "Grey"]},
    {name: "Finish", values: ["Glossy", "Matte"]},
    {name: "Lighting", values: ["Moring Sun", "Noon Sun", "Dusk", "Cloudy", "Night"]},
    {name: "House Side", values: ["Front", "East Side", "West Side", "Rear", "Fence Interior"]},
  ],
  "Tshirts": [
    {name: "Size", values: ["Small", "Medium", "Large", "XL", "XXL"]},
    {name: "Color", values: ["Blue", "Red", "Green", "Black", "White"]},
    {name: "Neck", values: ["V Neck", "Crew Neck"]},
    {name: "Pocket", values: ["Yes", "No"]},
    {name: "Gender", values: ["M", "F"]},
  ],
  "AndroidDevices": [
    {name: "Hardware Device", values: ["Samsung Galaxy S20", "Samsung Galaxy S21", "Samsung Galaxy S21 Plus", "Pixel 6 Pro", "Pixel 5", "Pixel 4", "OnePlus 9 Pro", "Samsung Galaxy Note 20 Ultra"]},
    {name: "Android Version", values: ["12L", "12", "11", "10", "9"]},
    {name: "Browser", values: ["Chrome", "Firefox", "Android Browser"]},
  ],
  "Languages": [
    {name: "Language", values: ["English", "German", "Spanish"]},
    {name: "Location", values: ["USA", "Mexico", "Germany"]},
  ],
  "Timezones": [
    {name: "Timezone", values: ["Eastern", "Central", "Mountain", "Pacific", "Atlantic"]},
    {name: "Observes DST", values: ["Yes", "No"]},
    {name: "Month", values: ["July", "January"]},
    {name: "Time", values: ["12:00pm", "12:00am", "11:59pm", "12:01am"]},
  ]
}


function Examples({actions}) {
  const droid = () => {
    actions.setDimensions(Data.AndroidDevices);
    actions.hideModal();
  }
  const paint = () => {
    actions.setDimensions(Data.PaintColors);
    actions.hideModal();
  }
  const shirt = () => {
    actions.setDimensions(Data.Tshirts);
    actions.hideModal();
  }
  const lang = () => {
    actions.setDimensions(Data.Languages);
    actions.hideModal();
  }
  const time = () => {
    actions.setDimensions(Data.Timezones);
    actions.hideModal();
  }
  
  return (
    <div>
      <ul className="example-list">
        <li><a className="example-link" onClick={paint}>Paint Colors</a> - Suppose you were trying to pick out paint colors for your house. You might want to see how each color looks in various lighting conditions and locations. You could generate a list of all combinations, test them out, and then give each one a letter grade.</li>
        
        <li><a className="example-link" onClick={lang}>Languages</a> - Suppose you were building a website that attempts to personalize content based on the user&apos;s language preference and physical location. For instance, a user who prefers English in the USA should see different content than a user who prefers English in Mexico.</li>

        <li><a className="example-link" onClick={time}>Timezones</a> - Suppose you were building an app that shows different content depending on the time of day. You notice a lot of bugs around day and timezone boundaries. For instance, users in some timezones see content from the previous day for one hour after midnight during daylight savings time. You might want to generate a list of timezone and DST scenarios to test.</li>
        
        <li><a className="example-link" onClick={shirt}>T-shirt Varieties</a> - Suppose you were building an online tshirt store, and you might want to generate a list of all the varieties of shirt you plan to sell, so you can assign each one a SKU.</li>

        <li><a className="example-link" onClick={droid}>Android Devices</a> - Suppose you were testing a website on Android devices. You might want to test on a variety of hardware platforms, operating system versions, and browsers.</li>
      </ul>
    </div>
  )
}

export default Examples;