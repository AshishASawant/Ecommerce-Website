import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState={categorie:'',data:[],status:'idle'}

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        changeData:(state,action)=>{
            state.data=action.payload
        },
    }
    ,extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='idle'
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status='error'
        })
    }
     // eslint-disable-next-line
    ,extraReducers:(builder)=>{
        builder
        .addCase(changeCategorie.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(changeCategorie.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='idle'
        })
        .addCase(changeCategorie.rejected,(state,action)=>{
            state.status='error'
        })
    }
     // eslint-disable-next-line
    ,extraReducers:(builder)=>{
        builder
        .addCase(sortData.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(sortData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status='idle'
        })
        .addCase(sortData.rejected,(state,action)=>{
            state.status='error'
        })
    }
})

export const {changeData}=productSlice.actions

export const fetchData=createAsyncThunk('data/fetch',async()=>{
    // const res=await fetch(' https://api.escuelajs.co/api/v1/products')
    const res=await fetch('https://fakestoreapi.com/products')
    const json =await res.json()
    return json
})
export const changeCategorie=createAsyncThunk('data/fetch',async(categorie)=>{
    const res=await fetch(`https://fakestoreapi.com/products/category/${categorie}`)
    const json =await res.json()
    return json
})
export const sortData=createAsyncThunk('data/fetch',async(direction)=>{
    const res=await fetch(`https://fakestoreapi.com/products?sort=${direction}`)
    const json =await res.json()
    return json
})

export default productSlice.reducer