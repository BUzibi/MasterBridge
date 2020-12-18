import React, { Component } from 'react';
import './MyResume.scss';
import EmptyLayout from 'layouts/EmptyLayout';
import Table from 'components/Table/Table';
import Tabs from 'components/Tabs/Tabs';
import EditGradeDialog from './EditGradeDialog/EditGradeDialog';
import AddGradeDialog from './AddGradeDialog/AddGradeDialog';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    tabChange, addGrade, delGrade, addInternship, delInternship, addAcademic, delAcademic, addHonor, delHonor,
    showEditGradeDialog,showAddGradeDialog
 } from 'store/actions/potraitmanagement';


@connect(state => ({
    tabValue: state.potraitmanagement.tabValue,
    tabItems: state.potraitmanagement.tabItems,
}), dispatch => ({
    tabChange: (tabValue) => dispatch(tabChange({ tabValue })),
}))
class MyResume extends Component {
    static propTypes = {
        tabValue: PropTypes.string,
        tabItems: PropTypes.array,

        tabChange: PropTypes.func,
    };

    render() {
        const { tabItems, tabValue, tabChange } = this.props;
        return (
            <EmptyLayout className='myresume'>
                <Tabs value={tabValue} items={tabItems} onChange={(e, item) => tabChange(item)}>
                    <div id="fundation" className="resume-contents">
                        <form>
                            <div className="fundation-message">
                                <span>姓名: </span>
                                <input type="text" name="Name" />
                            </div>
                            <div className="fundation-message">
                                <span>学号: </span>
                                <input type="text" name="StudentID" />
                            </div>
                            <div className="fundation-message">
                                <span>本科院校: </span>
                                <input type="text" name="UndergraduateSchool" />
                            </div>
                            <div className="fundation-message">
                                <span>本科专业: </span>
                                <input type="text" name="UndergraduateMajor" />
                            </div>
                            <div className="fundation-message">
                                <span>目标院校: </span>
                                <input type="text" name="TargetSchool" />
                            </div>
                            <div className="fundation-message">
                                <span>目标专业: </span>
                                <input type="text" name="TargetMajor" />
                            </div>
                            <div className="fundation-message">
                                <span>绩点: </span>
                                <input type="text" name="GPA" />
                            </div>
                            <div className="fundation-message">
                                <span>排名: </span>
                                <input type="text" name="rank" />
                            </div>
                            <div className="fundation-message">
                                <span>四级成绩: </span>
                                <input type="text" name="cet4" />
                            </div>
                            <div className="fundation-message">
                                <span>六级成绩: </span>
                                <input type="text" name="cet6" />
                            </div>
                            <div className="fundation-message">
                                <span>托福成绩: </span>
                                <input type="text" name="tofel" />
                            </div>
                        </form>
                    </div>
                    <GradeList />
                    <InternshipList />
                    <AcademicList />
                    <HonorList />
                </Tabs>
            </EmptyLayout>
        );
    }
}

@connect(state => ({
    gradeList: state.potraitmanagement.gradeList,
}), dispatch => ({
    showEditGradeDialog: (grade) => dispatch(showEditGradeDialog(grade)),
    showAddGradeDialog: () => dispatch(showAddGradeDialog()),
    addGrade: (form) => dispatch(addGrade(form)),
    delGrade: (id) => dispatch(delGrade(id)),
    // editGrade: (id) => dispatch(editGrade(id)),
}))
class GradeList extends Component {
    static propTypes = {
        gradeList: PropTypes.array,

        addGrade: PropTypes.func,
        delGrade: PropTypes.func,
        showEditGradeDialog: PropTypes.func,
        showAddGradeDialog: PropTypes.func,
        // editGrade: PropTypes.func,
    };

    componentDidMount() {
    }

    // aClick = (item) => {
    //     const { editGrade } = this.props;
    //     editGrade(item.id);
    // };

    bClick = (item) => {
        const { delGrade } = this.props;
        alert("确认删除？");
        delGrade(item.id);
    };

    updateGrade = (item) => {
        const { updateGrade } = this.props;
        // delGrade(update.id);
    };

    addGrade = (item) => {
        const { addGrade } = this.props;
        alert("确认添加？");
        addGrade(item);
    };

    render() {
        const { gradeList, showEditGradeDialog } = this.props;
        const tableConfig = [
            { key: 'id', title: '编号', align: 'center' },
            { key: 'coursename', title: '课程名称', align: 'center' },
            { key: 'score', title: '成绩', align: 'center' },
            { key: 'gpa', title: '绩点', align: 'center' },
            { key: 'ismajor', title: '是否专业课', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', width: '200px', render: (item) => {
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => showEditGradeDialog(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const item =  { id: '001', coursename: '数据挖掘', score: '90', gpa: '4.0', ismajor: '是' };
        return (
            <div>
                <Table config={tableConfig} data={gradeList} rowKey='id' />
                <button className="resume-add" onClick={() => this.showAddGradeDialog()}>添加</button>
                <EditGradeDialog/>
                <AddGradeDialog/>
            </div>
        );
    }
}


@connect(state => ({
    internshipList: state.potraitmanagement.internshipList,
}), dispatch => ({
    addInternship: (form) => dispatch(addInternship(form)),
    delInternship: (internshipno) => dispatch(delInternship(internshipno))
}))
class InternshipList extends Component {
    static propTypes = {
        internshipList: PropTypes.array,

        addInternship: PropTypes.func,
        delInternship: PropTypes.func,
    };

    bClick = (item) => {
        const { delInternship } = this.props;
        alert("确认删除？");
        delInternship(item.internshipno);
    };

    addInternship = (item) => {
        const { addInternship } = this.props;
        alert("确认添加？");
        addInternship(item);
    };

    render() {
        const { internshipList } = this.props;
        const tableConfig = [
            { key: 'internshipno', title: '编号', align: 'center' },
            { key: 'enterprise', title: '实习公司', align: 'center' },
            { key: 'department', title: '实习部门', align: 'center' },
            { key: 'job', title: '岗位', align: 'center' },
            { key: 'starttime', title: '开始时间', align: 'center' },
            { key: 'endtime', title: '结束时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const item = { internshipno: '02', enterprise: '优美缔', department: '研发', job: '软件工程师', starttime: '2020-07-29', endtime: '2020-01-29' }
        return (
            <div>
                <Table config={tableConfig} data={internshipList} />
                <button className="resume-add" onClick={() => this.addInternship(item)}>添加</button>
            </div>
        );
    }
}

@connect(state => ({
    academicList: state.potraitmanagement.academicList,
}), dispatch => ({
    addAcademic: (form) => dispatch(addAcademic(form)),
    delAcademic: (academicno) => dispatch(delAcademic(academicno))
}))
class AcademicList extends Component {
    static propTypes = {
        academicList: PropTypes.array,

        addAcademic: PropTypes.func,
        delAcademic: PropTypes.func,
    };

    bClick = (item) => {
        const { delAcademic } = this.props;
        alert("确认删除？");
        delGrade(item.academicno);
    };

    addAcademic = (item) => {
        const { addAcademic } = this.props;
        alert("确认添加？");
        addGrade(item);
    };

    render() {
        const { academicList } = this.props;
        const tableConfig = [
            { key: 'paperno', title: '编号', align: 'center' },
            { key: 'periodicalname', title: '期刊名称', align: 'center' },
            { key: 'papername', title: '发表论文/专利名称', align: 'center' },
            { key: 'publishtime', title: '发表时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const item = { paperno: "1", periodicalname: "", papername: "", publishtime: "" }
        return (
            <div>
                <Table config={tableConfig} data={academicList} />
                <button className="resume-add" onClick={() => this.addAcademic(item)}>添加</button>
            </div>
        );
    }
}

@connect(state => ({
    honorList: state.potraitmanagement.honorList,
}), dispatch => ({
    addHonor: (form) => dispatch(addHonor(form)),
    delHonor: (honorno) => dispatch(delHonor(honorno))
}))
class HonorList extends Component {
    static propTypes = {
        honorList: PropTypes.array,

        addHonor: PropTypes.func,
        delHonor: PropTypes.func,
    };

    bClick = (item) => {
        const { delHonor } = this.props;
        alert("确认删除？");
        delGrade(item.honorno);
    };

    addHonor = (item) => {
        const { addHonor } = this.props;
        alert("确认添加？");
        addHonor(item);
    };


    render() {
        const { honorList } = this.props;
        const tableConfig = [
            { key: 'honorno', title: '编号', align: 'center' },
            { key: 'awardname', title: '奖项名称', align: 'center' },
            { key: 'awarlevel', title: '奖项级别', align: 'center' },
            { key: 'awardrank', title: '奖项等级', align: 'center' },
            { key: 'issuingtime', title: '颁发时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>编辑</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const item = { honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' }
        return (
            <div>
                <Table config={tableConfig} data={honorList} />
                <button className="resume-add" onClick={() => this.addHonor(item)}>添加</button>
            </div>
        );
    }
}

export default MyResume;