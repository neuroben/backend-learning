import { TextField as MuiTextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {

                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                            borderColor: '#000',
                            color: '#000',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#000',
                            color: '#000',
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: '#fff', // Change this to your desired color
                        fontFamily: 'Incensolata, monospace',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        fontFamily: 'Inconsolata, monospace', // Set the fontFamily here
                    },
                    '& .MuiFormLabel-root': {
                        color: '#fff', // Change this to your desired color
                        fontFamily: 'Inconsolata, monospace',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#000', // Change this to your desired color
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff', // Change this to your desired color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000', // Change this to your desired color
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000', // Change this to your desired color
                    },
                    '& .MuiInputBase-root::before': {
                        borderBottomColor: '#fff', // Change this to your desired color
                    },
                    '&:hover .MuiInputBase-root::before': {
                        borderBottomColor: '#000', // Change this to your desired color
                    },
                    '& .MuiInputBase-root.Mui-focused::before': {
                        borderBottomColor: '#000', // Change this to your desired color
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#000', // Change this to your desired color
                        fontFamily: 'Incensolata, monospace',
                    },
                    '&:hover .MuiInputBase-input': {
                        color: '#000', // Change this to your desired color
                        fontFamily: 'Incensolata, monospace',
                    },
                    '& .Mui-focused .MuiInputBase-input': {
                        color: '#000', // Change this to your desired color
                        fontFamily: 'Incensolata, monospace',
                    },
                },
            },
        },
    },
});


const MyTextField = (props) => (
    <ThemeProvider theme={theme}>
        <MuiTextField {...props} />
    </ThemeProvider>
);

export default MyTextField;