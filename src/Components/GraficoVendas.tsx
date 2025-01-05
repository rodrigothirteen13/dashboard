import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

const dadosGraficos = [
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 300,
    falha: 20,
  },
  {
    data: "2023-05-04",
    pago: 3400,
    processando: 500,
    falha: 60,
  },
  {
    data: "2023-05-05",
    pago: 2000,
    processando: 500,
    falha: 60,
  }
]

const GraficoVendas = ({data}: {data: IVenda[]}) => {
  
  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart width={400} height={400} data={dadosGraficos}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3} />
      </LineChart>  
    </ResponsiveContainer>
  )
}

export default GraficoVendas
