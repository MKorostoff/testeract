import Head from 'next/head'
import { cartesianProduct } from 'cartesian-product-multiple-arrays';
import { useEffect, useState } from 'react'
import Modal from 'components/Modal';
import Table from 'components/Table';
import DimensionForm from 'components/DimensionForm';

export default function Home() {

  const defaultDimensions = [
    {name: "Style", values: ['short sleeve', 'long sleeve']},
    {name: "Size", values: ['large', 'medium', 'small']},
    {name: "Color", values: ['black', 'white', 'blue']},
  ];
  const [dimensions, setDimensions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [combinations, setCombinations] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);
  const [modalTitle, setModalTitle] = useState('');
  const [isDirty, setDirty] = useState(false);
  
  //Load saved data from memory, or use the default
  useEffect(function() {
    const saved = localStorage.getItem('dimensions');
    (saved && saved !== '[]') ? setDimensions(JSON.parse(saved)) : setDimensions(defaultDimensions);
  },[]);

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
  function editDimension(e) {
    let dimension = dimensions[e.target.dataset.column];
    setModalContent(<DimensionForm actions={{updateDimension, hideModal}} dimension={dimension} column={e.target.dataset.column}/>);
    setModalTitle("Edit Dimension");
    showModal();
  }
  //Add a new dimension to the list. For instance, if the list already contained
  //the dimensions named "size" (values large, medium, small) and another named
  //"color" (values red, green, blue) you might use this function to add an a new
  //dimension called "material" (values wood, plastic, metal)
  function addDimension(name, values) {
    setDirty(true);
    setDimensions([...dimensions, {name, values}])
  }
  function updateDimension(column, name, values) {
    setDirty(true);
    let updatedDimensions = [...dimensions];
    updatedDimensions[column] = {name, values};
    setDimensions([...updatedDimensions]);
  }
  function removeDimension(column) {
    setDirty(true);
    let updatedDimensions = [...dimensions];
    updatedDimensions.splice(column, 1);
    setDimensions(updatedDimensions);
  }
  //If the user has entered any data, prompt 'are you sure' otherwise, just clear the data
  function attemptClear() {
    (dimensions.length && isDirty) ? showClearConfirm() : clear()
  }
  function clear() {
    setDimensions([]);
    setDirty(true);
    hideModal();
  }
  //Todo: make confirm form re-usable
  function showClearConfirm() {
    const clearConfirm = <div className="confirmation-buttons">
      <button onClick={clear}>Clear All Data</button>
      <button onClick={hideModal}>Do Not Clear Data</button>
    </div>
    setModalContent(clearConfirm);
    setModalTitle("Are you sure you want to clear all data?");
    showModal();
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
  function save() {
    if (isDirty) {
      localStorage.setItem('dimensions', JSON.stringify(dimensions));
    }
  }

  //Set the initial values for the data table and set them again every
  //time a new dimension is added
  useEffect(()=>{
    combine();
    header();
    save();
  },[dimensions])

  return (
    <div>
      <Head>
        <title>Testeract</title>
        <meta name="description" content="Create a sortable, filterable list of test cases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="page-title">Welcome to The Testeract</h1>
        <div></div>
        <div className="buttons">
          <button onClick={showDimensionForm}>Add Dimension</button>
          <button onClick={attemptClear}>Clear All</button>
        </div>
        <Table headers={headers} combinations={combinations} actions={{removeDimension, editDimension}}/>
        {modalOpen ? <Modal actions={{hideModal}} title={modalTitle}>{modalContent}</Modal> : null}
      </main>
    </div>
  )
}