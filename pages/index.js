export default function Home() {
  return (
    <div className="main-content-container container-fluid px-4">

      <div className="page-header align-items-center justify-content-spacebetween row no-gutters px-4 my-4">
        <div className="col-12 col-sm-5 text-center text-sm-left mb-0">
          <div className="row align-items-center">
            <div className="col">
              <p className="page-title">Ejecución mes actual</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 mb-0">
          <div className="row align-items-center justify-content-space-around">
            <Link to="/resume" className="btn btn-secondary">Ver todos</Link>
            <i className="material-icons color-white display-5">help_outline</i>
          </div>
        </div>
      </div>
        
      <div className="row">
       
        <div className="col-lg col-md-6 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Ingresos por órdenes</span>
                  <h6 className="stats-small__value count my-3">S/{ordersPrice}</h6>
                </div>
              </div>
              <Line data={data3} options={options} />
            </div>
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 mb-4">
          <div className="stats-small stats-small--1 card card-small">
            <div className="card-body p-0 d-flex">
              <div className="d-flex flex-column m-auto">
                <div className="stats-small__data text-center">
                  <span className="stats-small__label text-uppercase">Órdenes</span>
                  <h6 className="stats-small__value count my-3">{orders.length}</h6>
                </div>
              </div>
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="col-lg col-md-4 col-sm-6 mb-4">
          <div className="stats-small card card-small">
            <div className="card-body p-0 d-flex">
              <Line data={data2} options={options2} />
            </div>
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
          <div className="card card-small">
            <div className="card-header border-bottom">
              <h6 className="m-0">Pacientes</h6>
            </div>
            <div className="card-body pt-0">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
          
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card card-small pending-events">
            <div className="card-header border-bottom">
              <div className="row py-2 bg-light">
                <div className="col-12 col-sm-8">
                  <h6 className="m-0">Eventos pendientes</h6>
                </div>
                <div className="col-12 col-sm-4 d-flex mb-2 mb-sm-0">
                  <a href="/" className="sub-link ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">Ver todo &rarr;</a>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              
              <div className="pending-events__item d-flex p-3">
                <p className="pending-events__p mb-0"><span className="pending-events__counte">{nno}</span>Nuevas órdenes</p>
              </div>
              <div className="pending-events__item d-flex p-3">
                <p className="pending-events__p mb-0"><span className="pending-events__counte">{nno}</span>Órdenes por confirmar</p>
              </div>
              <div className="pending-events__item d-flex p-3">
                <p className="pending-events__p mb-0"><span className="pending-events__counte">0</span>Mensajes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
