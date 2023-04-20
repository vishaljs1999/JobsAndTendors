import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import "./AddJobs.css";

const variants = [
    {
        id: 1,
        name: 'Office'
    },
    {
        id: 2,
        name: 'Workshop ',
    },
    {
        id: 3,
        name: 'Site',
    },
];

function AddJobs() {


    const [inputArr, setInputArr] = useState([])
    const [inputData, setInputData] = useState({
        item: "",
        quantity: "",
        mru: ""

    });

    const [variantName, setVariantName] = React.useState([]);
    const [age, setAge] = React.useState('');
    const [dropDown, setDropDown] = React.useState('');
    const [name, setName] = useState("");
    const [postSummited, setPostSummited] = useState(false);
    const navigate = useNavigate();

    const handleChangeAddTAsk = (event) => {

        setAge(event.target.value);

    };

    const handleChangeDropDown = (event) => {
        setDropDown(event.target.value);
    };

    const dataSubmit = () => {
        if (!name) {
            alert("please fields inputfield")
        } else {
            setPostSummited(true)
        }
    }
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        let duplicateRemoved = [];
        value.forEach((item) => {
            if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
                duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
            } else {
                duplicateRemoved.push(item);
            }
        });
        setVariantName(duplicateRemoved);
    };

    function changeHandle(e) {

        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    let { item, quantity, mru } = inputData;

    function addItem() {

        setInputArr([...inputArr, { item, quantity, mru }])
        setInputData({
            item: "",
            quantity: "",
            mru: ""
        }
        )
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-center add-request-style">Add Jobs </h4>
                    </div>
                    <div className="Add-request-bg">
                        <div className="row">
                            <div className="col-12">
                                <h6>Job information</h6>
                            </div>
                            <div className="col-6">
                                <TextField fullWidth className='w-100'
                                    type="text" label="job title"
                                    size='normal' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-6">
                                <textarea rows="2" class="form-control form-control-alternative " placeholder="Description"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Box className="w-100 mt-2">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" size='normal'  >Job Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Job Type"
                                            onChange={handleChangeAddTAsk}
                                        >
                                            <MenuItem value={10}>Full-Time</MenuItem>
                                            <MenuItem value={20}>Internship</MenuItem>
                                            <MenuItem value={30}>Part-Time</MenuItem>
                                            <MenuItem value={40}>Freelance</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="col-6">
                                <FormControl size="normal" className='w-100 mt-3'>
                                    <InputLabel id="demo-select-normal" >Category</InputLabel>
                                    <Select
                                        labelId="demo-select-normal"
                                        id="demo-select-normal"
                                        defaultValue={10}
                                        label="Category"
                                        onChange={handleChangeDropDown}
                                    >
                                        <MenuItem value={10} >default</MenuItem>
                                        <MenuItem value={20}>Design</MenuItem>
                                        <MenuItem value={30}>Programing</MenuItem>
                                        <MenuItem value={40}>Testing</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <Divider className="divider-style" />

                        <div className="col-12 d-flex justify-content-center ">
                            <button className="submit-btn-style ">Submit</button>
                        </div >
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddJobs