import React,{Component} from 'react';
import $ from 'jquery';
import  '../stylesheet/Menu.css'
const Menu=(props)=>
{
	const {route,fun}=props;
	const ok=()=>
	{
		if($('.line').css('height')!=='25px')
		{
			$('.line').css({'height':'25px'});
			$('.dot').css('transform','translateY(8px)')
			$('.Menu').css({'right':'0vw','box-shadow':'-10px 0px 30px 10px rgba(0,0,0,0.6),-100vw 0px 30px 100vw rgba(0,0,0,0.3)'})
		}
		else
		{
			$('.line').css({'height':'0px'});
			$('.dot:nth-child(1)').css('transform','translateY(0px)')
			$('.dot:nth-child(2)').css('transform','translateY(8px)')
			$('.dot:nth-child(3)').css('transform','translateY(17px)')
			$('.Menu').css({'right':'-50vw','box-shadow':'0px 0px 0px 0px transparent'});
		}
	}
	return (
	      <div className="Menu">
		      <div className="button">
			      <button className="menubutton" onClick={()=>ok()}>
				      <span className="menu">
					      <span className="dot"/>
					      <span className="dot"/>
					      <span className="dot"/>
					      <span className="line1 line"/>
					      <span className="line2 line"/>
				      </span>
			      </button>
		      </div>
	      <p className='nav-link Feed' onClick={()=>routeFeed(route,fun)}>Feed</p>
	      <p className='nav-link Profile' onClick={()=>route('profile')}>Profile</p>
	      <p className='nav-link Hashtag' onClick={()=>route('hashtags')}>Hashatag</p>
	      <p className='nav-link Settings' onClick={()=>route('settings')}>Settings</p>
	      <p className='nav-link Store' onClick={()=>route('store')}>Store</p>
	      </div>
	    );

}
const routeFeed=(route,fun)=>
{
	fun.feeds();
	route('feed')
}
export default Menu;

