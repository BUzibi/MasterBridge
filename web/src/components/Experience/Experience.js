import React, { Component } from 'react';
import './Experience.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import tongji from 'components/picture/tongji.jpg';
import shjiaotong from 'components/picture/shjiaotong.jpeg';
import peking from 'components/picture/peking.jpg';
import fudan from 'components/picture/fudan.jpg';
import sufe from 'components/picture/sufe.jpg';
import tsinghua from 'components/picture/tsinghua.jpg';
import jingyan from 'components/icon/jingyan.jpg';
import {
    Link
} from "react-router-dom";

export default class Experience extends Component {

    render() {
        return (
            <DefaultLayout className='experience'>
                 <div className="main-container">
                    <div className="main_top">
                        <div className="category_card">
                            <div className="category_top">
                                <div className="icon_text">地区</div>
                            </div>
                            <div className="category_bottom">
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">北京</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">上海</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">南京</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">武汉</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">成都</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">哈尔滨</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">长沙</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="category_top">
                                <div className="icon_text">院校</div>
                            </div>
                            <div className="category_bottom">
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">北京大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">清华大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">南京大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">复旦大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">上海交通大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">上海财经大学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">同济大学</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="category_card">
                            <div className="category_top">
                                <div className="icon_text">专业</div>
                            </div>
                            <div className="category_bottom">
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">金融</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">经济</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">计算机</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">哲学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">法学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">医学</span>
                                    </div>
                                </a>
                                <a className="tag_wrap">
                                    <div className="tag">
                                        <span className="text">物理学</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="left_articles">
                            <div className="tabs_wrap">
                                <div className="tabs">
                                    <div className="tabs_item">推荐</div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card_content">
                                    <div className="article_tile">
                                        <div className="tile_content">
                                            <div className="content">
                                                <div className="article">
                                                    <div className="title">一切都是最好的安排</div>
                                                    <div className="subtitle">保研分为两部分，一是本校保研资格的获取，二是目标学校的接收，二者是独立的，但缺一不可。</div>
                                                </div>
                                                <div className="action_group">
                                                    <div className="message">Sufer • 2020-11-11 • 同济大学 • 金融 • 阅读 77</div>
                                                </div>
                                            </div>
                                            <div className="thumbnail">
                                                <div className="place_holder">
                                                    <picture>
                                                        <img className="photo" src={tongji} alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article_tile">
                                        <div className="tile_content">
                                            <div className="content">
                                                <div className="article">
                                                    <div className="title">保研经验小分享</div>
                                                    <div className="subtitle">距离保研工作的结束，已经过去大半个月了。回想对于我的保研之路，我想可以用四个字来形容，“柳暗花明”。
                        谨以此文分享一些经验教训，给即将保研的学弟学妹们，愿他们少些弯路，多些顺遂。以下干货长文警告哟！！！！</div>
                                                </div>
                                                <div className="action_group">
                                                    <div className="message">Sufer • 2020-11-11 • 阅读 77</div>
                                                </div>
                                            </div>
                                            <div className="thumbnail">
                                                <div className="place_holder">
                                                    <picture>
                                                        <img className="photo" src={sufe} alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article_tile">
                                        <div className="tile_content">
                                            <div className="content">
                                                <div className="article">
                                                    <div className="title">保研经验｜一个保研边缘生的幸运历程</div>
                                                    <div className="subtitle">大一时，我和大多数刚步入大学生活的同学一样，迷茫失措，不知如何学习，勉勉强强大一综测排名专业第17位，大二时，培养了对专业课的浓厚兴趣，于是取得了比较可观的成绩，
                        大二综测排名第7位，大三时，继续努力坚持，获得专业排名第2位的好成绩。</div>
                                                </div>
                                                <div className="action_group">
                                                    <div className="message">Sufer • 2020-11-11 • 阅读 77</div>
                                                </div>
                                            </div>
                                            <div className="thumbnail">
                                                <div className="place_holder">
                                                    <picture>
                                                        <img className="photo" src={tsinghua} alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article_tile">
                                        <div className="tile_content">
                                            <div className="content">
                                                <div className="article">
                                                    <div className="title">保研经验分享：越努力越幸运</div>
                                                    <div className="subtitle">也许有命中注定，但是也有偶然的意外让命运由我不由天，克服不可能的良剂是努力。
                        成功其实很简单，只需要三步：想、做、成。“想”也容易，“成”也淡然，只有“做”让众人望而却步。</div>
                                                </div>
                                                <div className="action_group">
                                                    <div className="message">Sufer • 2020-11-11 • 阅读 77</div>
                                                </div>
                                            </div>
                                            <div className="thumbnail">
                                                <div className="place_holder">
                                                    <picture>
                                                        <img className="photo" src={peking} alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_question">
                            <div className="white_card">
                                <div className="card_content">
                                    <div className="card_wrap">
                                        <Link to="/Master" className="icon_item">
                                            <img className="icon_wrap" src={jingyan} alt="" />
                                            <div className="icon_text">写经验</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}