import React from 'react'

import '../css/dimensions.css'

const Dimensions = props => (
  <div className='dimensions'>
    <p className='dimensions-description'>Используйте таблицу ниже, чтобы определить свой размер. Если один из параметров соответствует двум размерам, закажите модель меньшего размера для более плотной посадки или модель большего размера для более свободной. Если обхват бедер и обхват талии соответствуют разным размерам, выберите размер, которому соответствуют параметры бедер.</p>
    <div className="dimensions-table">
      <div className="titles row">
        <div className="table-title item">Российский</div>
        <div className="table-title item">Европейский</div>
        <div className="table-title item">Обхват талии</div>
        <div className="table-title item">Обхват бедер</div>
      </div>

      <div className="line">
        <hr />
      </div>

      <div className="sizes row">
        <div className="table-size item">40&minus;42</div>
        <div className="table-size item">XS</div>
        <div className="table-size item">60&minus;67</div>
        <div className="table-size item">84&minus;91</div>
      </div>

      <div className="sizes row">
        <div className="table-size item">42&minus;44</div>
        <div className="table-size item">S</div>
        <div className="table-size item">67&minus;74</div>
        <div className="table-size item">91&minus;98</div>
      </div>

      <div className="sizes row">
        <div className="table-size item">46&minus;48</div>
        <div className="table-size item">M</div>
        <div className="table-size item">74&minus;81</div>
        <div className="table-size item">98&minus;105</div>
      </div>

      <div className="sizes row">
        <div className="table-size item">48&minus;50</div>
        <div className="table-size item">L</div>
        <div className="table-size item">48&minus;50</div>
        <div className="table-size item">105&minus;112</div>
      </div>

      <div className="sizes row">
        <div className="table-size item">50&minus;52</div>
        <div className="table-size item">XL</div>
        <div className="table-size item">81&minus;88</div>
        <div className="table-size item">112&minus;120</div>
      </div>

      <div className="sizes row">
        <div className="table-size item">52&minus;54</div>
        <div className="table-size item">XXL</div>
        <div className="table-size item">98&minus;108</div>
        <div className="table-size item">120&minus;128</div>
      </div>
    </div>
    <button className="back btn" onClick={props.history.goBack}>Назад</button>
  </div>
)

export default Dimensions