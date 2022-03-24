import React, {useState} from "react";
import { makeStyles } from '@northstar/core/styles';
import Paper from '@northstar/core/Paper';
import Table from '@northstar/core/Table';
import TableBody from '@northstar/core/TableBody';
import TableContainer from '@northstar/core/TableContainer';
import TablePagination from '@northstar/core/TablePagination';
import TableRow from '@northstar/core/TableRow';

import MealItem from './MealItem'
import MealsHeader from './MealsHeader'
import MealEditor from './MealEditor'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
        id: 'm5',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm6',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm7',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const useStyles = makeStyles({
    root: {
        marginTop: 50,
        width: '100%'   
    },
    container: {
        maxHeight: 440,
    },
});

const Meals = () => {

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {       
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
   
    const [editorIsShown, setEditorIsShown] = useState(false)

    const showEditorHandler = () => {
        setEditorIsShown(true);
    }
    
    const hideEditorHandler = () => {
        setEditorIsShown(false);
    }

    return ( 
    <>      
        {editorIsShown && <MealEditor onClose={hideEditorHandler}/>}  
        <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <MealsHeader />
                        <TableBody>
                            {DUMMY_MEALS
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((meal) => 
                                <TableRow hover role="checkbox" tabIndex={-1} key={meal.id} >                                  
                                    <MealItem
                                        id={meal.id} 
                                        key={meal.id} 
                                        name={meal.name} 
                                        description={meal.description}
                                        price={meal.price}
                                        onShowEditor={showEditorHandler} 
                                    /> 
                                </TableRow>
                                )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={DUMMY_MEALS.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </Paper>
    </>
    );
};

export default Meals;

