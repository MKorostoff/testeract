import Head from 'next/head'
import { cartesianProduct } from 'cartesian-product-multiple-arrays';
import { useEffect, useState } from 'react'
import Modal from 'components/Modal';
import Table from 'components/Table';
import DimensionForm from 'components/DimensionForm';

export default function Home() {
  // const [dimensions, setDimensions] = useState([
  //   {name: "Paint Color", values: ['blue', 'red', 'black']},
  //   {name: "Paint Finish", values: ['glossy', 'matte']},
  //   {name: "Lighting", values: ['sunny', 'cloudy', 'night']},
  //   {name: "Viewing Angle", values: ['north', 'south', 'east', 'west']},
  //   {name: "Viewing Distance", values: ['10ft', '50ft']},
  // ]);

  const [dimensions, setDimensions] = useState([
    {name: "Style", values: ['short sleeve', 'long sleeve']},
    {name: "Size", values: ['large', 'medium', 'small']},
    {name: "Color", values: ['black', 'white', 'blue']},
  ]);
  
  // const [dimensions, setDimensions] = useState([
  //   {name: "Page", values: ['Homepage', 'Profile Page', 'Product Detail Page', 'Cart']},
  //   {name: "Logged In User", values: ['Logged In User', 'Logged Out User']},
  //   {name: "Language", values: ['en-us', 'en-gb', 'de']},
  // ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [combinations, setCombinations] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);
  const [modalTitle, setModalTitle] = useState('');
  
  function showModal() {
    setModalOpen(true);
  }
  function hideModal() {
    setModalOpen(false);
  }
  function showDimensionForm() {
    setModalContent(<DimensionForm actions={{addDimension, hideModal}}/>);
    setModalTitle("Add New Dimension");
    showModal();
  }

  //Add a new dimension to the list. For instance, if the list already contained
  //the dimensions named "size" (values large, medium, small) and another named
  //"color" (values red, green, blue) you might use this function to add an a new
  //dimension called "material" (values wood, plastic, metal)
  function addDimension(name, values) {
    setDimensions([...dimensions, {name, values}])
  }

  //Same as add dimenssion, just removing
  function removeDimension(name) {
    let _dimensions = [];
    dimensions.forEach((d) => {
      if (d.name !== name) {
        _dimensions.push(d);
      }
    });
    setDimensions(_dimensions);
  }

  // Take all the values in the dimensions object and create a set of all sets.
  // For instance, given the sets [small,large] and [chocolate,vanilla] the set
  // of all sets would be [small chocolate], [large chocolate], [small vanilla],
  // and [large vanilla]
  function combine() {
    let values = dimensions.map((d) => d.values);
    if (values.length) {
      let cartesian = cartesianProduct(...values);
      setCombinations(cartesian);
    }
    else setCombinations([]);
  }

  //Iterate over all dimensions and form them into a flat array which will be
  //convenient for printing as a table header.
  function header() {
    let header = dimensions.map((d) => d.name);
    setHeaders(header)
  }

  //Set the initial values for the data table and set them again every
  //time a new dimension is added
  useEffect(()=>{
    combine();
    header();
  },[dimensions])

  return (
    <div>
      <Head>
        <title>Testeract</title>
        <meta name="description" content="Create a sortable, filterable list of test cases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to The Testeract</h1>
        <button onClick={showDimensionForm}>Add Dimension</button>
        <Table headers={headers} combinations={combinations} actions={{removeDimension}}/>
        {modalOpen ? <Modal actions={{hideModal}} children={modalContent} title={modalTitle} /> : null}
      </main>
    </div>
  )
}
