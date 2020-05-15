import React from 'react'
import {Container,Box, Grid,Card,CardMedia} from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/styles'

const styles=makeStyles({
  rootContainer:{
    marginTop:'30px'
  },
  link:{
    textDecoration:'none', color:'#555'
  }
})
export default function items(props){
  const classes= styles()
  const detailMovie = props.location.state
  document.title=detailMovie.Title
  return (
    <>
    <Container maxWidth='md' className={classes.rootContainer}>
      <Box style={{width:'100%', alignItems:'center',padding:'10px'}}>
        <LinkRouter to='/' className={classes.link}>Home</LinkRouter>
        <ArrowForwardIosIcon style={{fontSize:'12px', marginRight:'5px', color:'#222', marginLeft:'5px'}}/>
  <LinkRouter className={classes.link} style={{ color:'#222'}} to={{
    pathname:"/"+props.match.params.movieId,
    state:detailMovie
  }}>{detailMovie.Title}</LinkRouter>
      </Box>
    </Container>
    <Container maxWidth='md' className={classes.rootContainer}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6}>
          <Card style={{height:'600px'}}>
            <CardMedia component='img' style={{height:'100%'}} image={detailMovie.Poster}/>
          </Card>
        </Grid>
        <Grid item  xs={12} sm={12} md={6}>
            <h5 style={{margin:0}}>{detailMovie.Type}</h5>
            <h6 style={{margin:0}}>{detailMovie.Year}</h6>
            <h1 style={{margin:0, marginBottom:'15px', marginTop:'15px'}}>{detailMovie.Title}</h1>
            <h5 style={{margin:0}}>Description</h5>
            <p>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}