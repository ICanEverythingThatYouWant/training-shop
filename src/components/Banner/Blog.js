import blog1 from "../../img/blog1.svg";
import blog2 from "../../img/blog2.svg";
import blog3 from "../../img/blog3.svg";

function Blog(){
    return (
        <div className='card'>
            <div className='blog'>
                <h2>
                    LATEST FROM BLOG<span>
                        SEE ALL
                  </span>
                </h2>
                <div className='blogCard'>
                    <div className='blogCardDescription'>
                        <img src={blog1} alt='icon'/>
                        <div className='blogText'>
                            <h3>
                                The Easiest Way to Break
                            </h3>
                            <h4 className='blogDescription'>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising
                                pain was bor
                            </h4>
                        </div>
                    </div>
                    <div className='blogCardDescription'>
                        <img alt='icon' src={blog2}/>
                        <div className='blogText'>
                            <h3>
                                Wedding Season
                            </h3>
                            <h4 className='blogDescription'>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
                            </h4>
                        </div>
                    </div>
                    <div className='blogCardDescription'>
                        <img alt='icon' src={blog3}/>
                        <div className='blogText'>
                            <h3>
                                Recent Favorites On Repeat
                            </h3>
                            <h4 className='blogDescription'>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising
                                pain was bor
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;