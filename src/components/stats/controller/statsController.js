import React from 'react'

const style={
    container:`flex flex-col mt-2`,
    wrapper:`flex p-2 justify-between items-center font-medium w-[70rem] cursor-pointer hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
    wrapperparent:`flex  items-center  justify-between `,
    wrapperChild:`flex w-[45rem] justify-between `,
    photo:`w-14 h-14 rounded-full`,
    name:`ml-5`,
}

const StatsController = ({value}) => {
  return (
      <div className={style.container}>
          <div className={style.wrapper}>
              <div className={style.wrapperparent}>
                  <img
                      className={style.photo}
                      src={value?.image_original_url || "No Data"} />
                  <p className={style.name}>
                      {value?.asset_contract?.name || "No Data"}
                  </p>
              </div>
              <div className={style.wrapperChild}>
                  <p>
                      {value?.asset_collection?.stats?.total_volume || "No Data"}
                  </p>
                  <p>
                      {value?.asset_collection?.stats?.one_day_sales || "No Data"}
                  </p>
                  <p>
                      {value?.asset_collection?.stats?.seven_day_sales || "No Data"}
                  </p>
                  <p>
                      {value?.asset_collection?.stats?.floor_price || "No Data"}
                  </p>
                  <p>
                      {value?.asset_collection?.stats?.num_owners || "No Data"}
                  </p>
                  <p>
                      {value?.asset_collection?.stats?.count || "No Data"}
                  </p>
              </div>
          </div>
      </div>
  )
}

export default StatsController