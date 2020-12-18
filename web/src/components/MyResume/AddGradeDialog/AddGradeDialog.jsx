import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ss from 'classnames';
import DialogWithConfirm from 'components/Dialog/DialogWithConfirm';
import Input from 'components/Input/Input';
import './AddGradeDialog.scss';
import { connect } from 'react-redux';
import {
    closeAddGradeDialog, addGradeCoursename, addGradeScore,
    addGradeGpa, addGradeIsmajor, addGrade
} from 'store/actions/potraitmanagement';

@connect(state => ({
    show: state.potraitmanagement.addGradeDialog.show,
    form: state.potraitmanagement.addGradeDialog.form,
}), dispatch => ({
    closeDialog: () => dispatch(closeAddGradeDialog()),
    addGradeCoursename: (coursename) => dispatch(addGradeCoursename(coursename)),
    addGradeScore: (score) => dispatch(addGradeScore(score)),
    addGradeGpa: (gpa) => dispatch(addGradeGpa(gpa)),
    addGradeIsmajor: (ismajor) => dispatch(addGradeIsmajor(ismajor)),
    addGrade: () => dispatch(addGrade()),
}))
class AddGradeDialog extends Component {
    static propTypes = {
        show: PropTypes.bool,
        form: PropTypes.object,

        closeDialog: PropTypes.func,
        addGradeCoursename: PropTypes.func,
        addGradeScore: PropTypes.func,
        addGradeGpa: PropTypes.func,
        addGradeIsmajor: PropTypes.func,
        addGrade: PropTypes.func,
    };


    render() {
        const {
            show, closeDialog, form, addGradeCoursename,
            addGradeScore, addGradeGpa, addGradeIsmajor, addGrade
        } = this.props;
        const { coursename, score, gpa, ismajor } = form;
        return (
            <DialogWithConfirm show={show} onClose={() => closeDialog()}
                onCancel={() => closeDialog()}
                onConfirm={() => addGrade()}
                title='添加成绩'>
                <form>
                    <table>
                        <tr>
                            <td>课程名称</td>
                        </tr>
                        <tr>
                            <td><Input value={coursename} onChange={(v) => addGradeCoursename(v)}/></td>
                        </tr>
                        <tr>
                            <td><Input value={score} onChange={(v) => addGradeScore(v)}/></td>
                        </tr>
                        <tr>
                            <td><Input value={gpa} onChange={(v) => addGradeGpa(v)}/></td>
                        </tr>
                        <tr>
                            <td><Input value={ismajor} onChange={(v) => addGradeIsmajor(v)}/></td>
                        </tr>
                    </table>
                </form>
            </DialogWithConfirm>
        );
    }
}

export default AddGradeDialog;