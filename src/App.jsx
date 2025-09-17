import { useForm} from 'react-hook-form'
import './App.css'

function App() {
  const { register, watch } = useForm({defaultValues: {
    modelo: 'polo.png', 
    alarme: false, 
    camera: false}})
  
  const modelo = watch('modelo')
  const alarme = watch('alarme')
  const camera = watch('camera')  

  function calcularPreco() {
    let preco 
    if (modelo == 'polo.png') {
      preco = 89000
    }else if (modelo == 't-cross.png') {
      preco = 102000
    }else if (modelo == 'virtus.png') {
      preco = 105000
    }
      if (alarme) {
        preco += 1200
      }
      if (camera) {
        preco += 2000
      }

  return preco
  }
  return (
    <>
    <header>
        <img src="./logo.png" alt="Logo da Revenda" />
      <div>
        <h1>Revenda Serpa | 23 anos</h1>
        <h2>Promoções de aniversário: Veiculos com Desconto</h2>  
      </div>
    </header>
    <main>
      <div>
        <h3>Modelos em Promoção</h3>
        <p>
          <input type="radio" id="polo" {...register("modelo")} value="polo.png" />
          <label htmlFor="polo">VW Polo</label>
        </p>
        <p>
          <input type="radio" id="t-cross" {...register("modelo")} value="t-cross.png" />
          <label htmlFor="t-cross">VW T-Cross </label>
        </p>
        <p>
          <input type="radio" id="virtus" {...register("modelo")} value="virtus.png" />
          <label htmlFor="virtus">VW Virtus</label>
        </p>
      </div>
      <div>
        <img src={modelo} alt="Imagem do Veiculo" />
      </div>
      <div> 
        <h3>Acessorios Opcionais</h3>
        <p>
          <input type="checkbox" id="alarme" {...register("alarme")} />
          <label htmlFor="alarme">Alarme</label>
        </p>
        <p>
          <input type="checkbox" id="camera"{...register ("camera")} />
          <label htmlFor="camera">Câmera de Ré</label>
        </p>
      </div>
</main>
    
    <footer>
      <h2>Preço Promocional R$:{calcularPreco().toLocaleString("pt-br",{minimumFractionDigits:2})}</h2>
      <h2><i>*Consulte Opções de Financiamento</i></h2>
    </footer>


    </>  
  )
}

export default App
