import React from 'react'

class PageHeader extends React.Component {
  render() {
    return (
      <header className='page-header'>
				<ul>
					<li className="header-menu"><a href="http://#" alt='Menu'></a></li>
					<li className='logo'><a href="http://#">Easy<strong>Shape</strong></a></li>
					<li className='cart'><a href="http://#" alt='Cart'></a></li>
				</ul>
      </header>
    )
  }
}

export default PageHeader