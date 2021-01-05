import React, { Component } from 'react';
import './Postgraduate.scss';
import DefaultLayout from 'layouts/DefaultLayout';


export default class Postgraduate extends Component {

    render() {
        return (
            <DefaultLayout className='postgraduate'>
                <body>
                    <div class="mainbody">
                        <div class="dialate">
                            <span>保研时刻表</span>
                        </div>
                        <div class="post-container" >
                               <div class="post-row">
                                   <div class="timeline">
                                       <div class="timeline-content">
                                           <div class="circle">
                                               <img src="gra.png" class="graduate"></img>
                                           </div>
                                           <div class="content">
                                               <span class="year">3月初-7月底</span>
                                               <h4 class="title">保研夏令营</h4>
                                               <p class="description">
                                                    保研夏令营是各高校抢夺优质生源的一种方式。利用暑假中三天左右的时间，通过多种方式（笔试、面试、实验测试等）来考核学生，以确定是否发放拟录取通知书。
                                                    <a href="summercamp">
                                                        <br></br>
                                                        <br></br>
                                                        ⭐查看夏令营信息
                                                    </a>
                                                </p>
                                           </div>
                                       </div>
                                   </div>
                                   <div class="timeline-content">
                                           <div class="circle">
                                               <img src="gra.png" class="graduate"></img>
                                           </div>
                                           <div class="content">
                                               <span class="year">7月初 - 9月28日</span>
                                               <h4 class="title">保研预报名</h4>
                                               <p class="description">
                                               预报名是一些高校为了提前接受优质生源，自发组织的招收推免生的活动，本质与夏令营相同。预报名可报多个学校，就像保研夏令营一样。提醒：不是各个学校都有预报名。
                                                    <a href="prelaunch">
                                                        <br></br>
                                                        <br></br>
                                                        ⭐查看预报名信息
                                                    </a>
                                                </p>
                                           </div>
                                       </div>
                                       <div class="timeline-content">
                                           <div class="circle">
                                               <img src="gra.png" class="graduate"></img>
                                           </div>
                                           <div class="content">
                                               <span class="year">9月28日 - 10月31日</span>
                                               <h4 class="title">国家正式推免</h4>
                                               <p class="description">
                                               国家正式推免一般指在9月28日，通过教育部学信网推免系统上申请获得名额，基本流程是报名-审核-复试-录取。每个学生申请的时候只能填写三所院校。
                                                    <a href="https://yz.chsi.com.cn/yzzt/tmzn/">
                                                        <br></br>
                                                        <br></br>
                                                        ⭐推免服务系统
                                                    </a>
                                                </p>
                                           </div>
                                       </div>
                                       <div class="timeline-content">
                                           <div class="circle">
                                               <img src="gra.png" class="graduate"></img>
                                           </div>
                                           <div class="content">
                                               <span class="year">10月31日 - 11月底</span>
                                               <h4 class="title">拟录取名单公示</h4>
                                               <p class="description">
                                               在全国推免服务系统报名之后，并且在系统确定了拟录取接下来就要等各各个学校公开正式推免的拟录取名单，等待明年六月份的录取通知书寄到您本人手里。
                                                    <a href="https://yz.chsi.com.cn/tm/lqmd.jsp">
                                                        <br></br>
                                                        <br></br>
                                                        ⭐拟录取名单汇总
                                                    </a>
                                                </p>
                                           </div>
                                       </div>
                                       <div class="timeline-content">
                                           <div class="circle">
                                               <img src="gra.png" class="graduate"></img>
                                           </div>
                                           <div class="content">
                                               <span class="year">明年6月底</span>
                                               <h4 class="title">录取通知书</h4>
                                               <p class="description">
                                               在明年6月底，同学们的录取通知书将会送到自己手中，可以选择邮寄或者自取的方式。 
                                                </p>
                                           </div>
                                       </div>
                               </div> 
                        </div> 
                    </div>
                </body>
            </DefaultLayout>
        );
    }
}