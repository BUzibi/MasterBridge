import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ss from 'classnames';
import DialogWithConfirm from 'components/Dialog/DialogWithConfirm';
import Input from 'components/Input/Input';
import './EditGradeDialog.scss';
import { connect } from 'react-redux';
import {
    closeEditGradeDialog, changeGradeCoursename, changeGradeScore,
    changeGradeGpa, changeGradeIsmajor, updateGrade
} from 'store/actions/potraitmanagement';

@connect(state => ({
    show: state.potraitmanagement.editGradeDialog.show,
    form: state.potraitmanagement.editGradeDialog.form,
}), dispatch => ({
    closeDialog: () => dispatch(closeEditGradeDialog()),
    changeCoursename: (coursename) => dispatch(changeGradeCoursename(coursename)),
    changeScore: (score) => dispatch(changeGradeScore(score)),
    changeGpa: (gpa) => dispatch(changeGradeGpa(gpa)),
    changeIsmajor: (ismajor) => dispatch(changeGradeIsmajor(ismajor)),
    updateGrade: () => dispatch(updateGrade()),
}))
class EditGradeDialog extends Component {
    static propTypes = {
        show: PropTypes.bool,
        form: PropTypes.object,

        closeDialog: PropTypes.func,
        changeCoursename: PropTypes.func,
        changeScore: PropTypes.func,
        changeGpa: PropTypes.func,
        changeIsmajor: PropTypes.func,
        updateGrade: PropTypes.func,
    };


    render() {
        const {
            show, closeDialog, form, changeCoursename,
            changeScore, changeGpa, changeIsmajor, updateGrade
        } = this.props;
        const { coursename, score, gpa, ismajor } = form;
        return (
            <DialogWithConfirm show={show} onClose={() => closeDialog()}
                onCancel={() => closeDialog()}
                onConfirm={() => updateGrade()}
                title='编辑成绩'>
                <form>
                    <table>
                        {/* <tr>
                            <td>课程名称</td>
                        </tr> */}
                        <tr>
                            <td>课程名称<Input value={coursename} onChange={(v) => changeCoursename(v)}/></td>
                        </tr>
                        <tr>
                            <td>成绩<Input value={score} onChange={(v) => changeScore(v)}/></td>
                        </tr>
                        <tr>
                            <td>绩点<Input value={gpa} onChange={(v) => changeGpa(v)}/></td>
                        </tr>
                        <tr>
                            <td>是否专业课<Input value={ismajor} onChange={(v) => changeIsmajor(v)}/></td>
                        </tr>
                    </table>
                </form>
            </DialogWithConfirm>
        );
    }
}

export default EditGradeDialog;