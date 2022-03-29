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
import MealDelete from './MealDelete'

const useStyles = makeStyles({
    root: {
        marginTop: 50,
        width: '100%'   
    },
    container: {
        maxHeight: 440,
    },
});

const Meals = (props) => {
    const [currentMeal, setCurrentMeal] = useState();
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {       
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
   
    const [editorIsShown, setEditorIsShown] = useState(false)
    const [toDelteIsShown, setToDeleteIsShown] = useState(false)

    const showEditorHandler = (meal) => {
        setEditorIsShown(true);
        setCurrentMeal(meal);
    }
    
    const hideEditorHandler = () => {
        setEditorIsShown(false);
    }

    const showToDeleteHandler = (meal) => {
        setToDeleteIsShown(true);
        setCurrentMeal(meal);
    }

    const hidetoDeleteHandler = () => {
        setToDeleteIsShown(false);
    }


    return ( 
    <>   
        {
            editorIsShown  &&  <MealEditor currentMeal={currentMeal} onClose={hideEditorHandler}/>
        }  
        {
            toDelteIsShown && <MealDelete currentMeal={currentMeal} onClose={hidetoDeleteHandler}/>
        }            
        { props.meals !== undefined && props.meals.length !== 0 &&
        <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <MealsHeader />
                        <TableBody>
                            {props.meals
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((meal) => 
                                <TableRow hover role="checkbox" tabIndex={-1} key={meal.id} >                                  
                                    <MealItem
                                        id={meal.id} 
                                        key={meal.dbKey} 
                                        name={meal.name} 
                                        description={meal.description}
                                        price={meal.price}
                                        onShowEditor={() => showEditorHandler(meal)}
                                        onDelete={() => showToDeleteHandler(meal)}
                                    />                                   
                                </TableRow>                              
                                )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={props.meals.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </Paper>
    }
    </>
    );
};

export default Meals;

