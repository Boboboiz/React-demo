import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


// state toàn bộ giá trị trên store
function ReduxHooks() {
    const {products} = useSelector((state) => {
        console.log(state)
        return state.productReducer
    })
    const dispatch = useDispatch()
    const handleTryCloth = (type, imgSrc_png) => {
        // this.props.dispatch({
        //   type: "product/UPDATE_SELECTED_PRODUCT",
        //   payload: {
        //     type: type,
        //     img: imgSrc_png,
        //   },
        // });
        dispatch({
          type: "product/UPDATE_SELECTED_PRODUCT",
          payload: {
            type: type,
            img: imgSrc_png,
          },
        });
      };
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-4">
            <div className="card p-2 mb-4">
              <img alt="" src={item.imgSrc_jpg} />
              <h3>{item.name}</h3>
              <button className="btn btn-info" onClick={()=> {
                handleTryCloth(item.type, item.imgSrc_png)
              }}>Mặc thử</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReduxHooks