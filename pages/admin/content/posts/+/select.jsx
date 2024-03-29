import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useContext } from 'react';
import { PostContext } from '../../../../_app';


const DropdownMenu = () => {
    const { post, setPost } = useContext(PostContext);
    const [category, setCategory] = useState([]);



    return (
        <FormControl sx={{ color: '#fff', width: '280px' }}>

            <Select
                sx={{ color: 'white' }}
                multiple
                value={post.tags}
                onChange={(event) => {
                    setCategory(event.target.value);
                    setPost(prevPost => ({ ...prevPost, tags: event.target.value }));
                }}
                renderValue={(selected) => (
                    <Box sx={{ textAlign: 'left' }}>
                        {selected.map((value) => (
                            <Box sx={{ margin: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #fff' }} key={value}>{value}</Box>
                        ))}
                    </Box>
                )}
            >
                <MenuItem disabled value="category">
                    <em>Cimkék</em>
                </MenuItem>
                <MenuItem value="Folt varrás">
                    <Checkbox checked={category.indexOf("Folt varrás") > -1} />
                    <ListItemText primary="Folt varrás" />
                </MenuItem>
                <MenuItem value="Patchwork">
                    <Checkbox checked={category.indexOf("Patchwork") > -1} />
                    <ListItemText primary="Patchwork" />
                </MenuItem>
                <MenuItem value="Cars">
                    <Checkbox checked={category.indexOf("Cars") > -1} />
                    <ListItemText primary="Autók" />
                </MenuItem>
                <MenuItem value="Development">
                    <Checkbox checked={category.indexOf("Development") > -1} />
                    <ListItemText primary="Fejlesztés" />
                </MenuItem>
                <MenuItem value="Technology">
                    <Checkbox checked={category.indexOf("Technology") > -1} />
                    <ListItemText primary="Technológia" />
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default DropdownMenu;