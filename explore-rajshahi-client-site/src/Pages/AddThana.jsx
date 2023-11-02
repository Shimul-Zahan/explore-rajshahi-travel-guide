import React from 'react'
import BgImage from '../assets/track_elements.jpg'
import axios from 'axios';
import Swal from 'sweetalert2'
import Title from '../Components/Title';

const AddThana = () => {

    const handleAddThana = async (e) => {
        e.preventDefault();
        const thanaName = e.target.thana.value.toUpperCase();
        const distarict = e.target.district.value.toUpperCase();
        const imageURL = e.target.imageURL.value;
        const shortDesc = e.target.shortDesc.value || 'none';

        const thana = { thanaName, distarict, imageURL, shortDesc }
        console.log(thana)

        const res = await axios.post('http://localhost:5000/add-thana', thana, {withCredentials: true});
        const data = await res.data;
        if (data.acknowledged) {
            e.target.reset();
            Swal.fire(
                'Congratulaitions!',
                'Your Thana added Successfully!',
                'success'
            )
        }
    }

  return (
      <div>
          <Title children={"Add Thana Here"} />
          <form onSubmit={handleAddThana} className='pt-10 text-xl bg-blend-overlay bg-white bg-opacity-90 min-h-[700px]' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="thana" id="floating_email" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Thana Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="district" id="floating_email" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">District Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="imageURL" id="floating_password" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="shortDesc" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short Description</label>
              </div>
              <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Now</button>
          </form>
    </div>
  )
}

export default AddThana