import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ss from 'classnames';
import './Table.scss';

function getValueByObjectKey(keyChain = '', obj = {}) {
    let dotAt = keyChain.indexOf('.');
    if (dotAt === -1) return obj[keyChain];
    const key = keyChain.substring(0, dotAt);
    const nextObj = obj[key];
    if (nextObj instanceof Object) {
        const nextKey = keyChain.substring(dotAt + 1, keyChain.length);
        return getValueByObjectKey(nextKey, nextObj);
    } else {
        return nextObj;
    }
}

class Table extends Component {
    static propTypes = {
        className: PropTypes.string,
        thClassName: PropTypes.string,
        tdClassName: PropTypes.string,
        config: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
            key: PropTypes.string.isRequired,
            align: PropTypes.oneOf(['left', 'center', 'right']),
            width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            render: PropTypes.func,
        })).isRequired,
        data: PropTypes.arrayOf(PropTypes.object),
        rowKey: PropTypes.string,
        titleGutterTheme: PropTypes.oneOf(['grey', 'cyan']),
        border: PropTypes.bool,
        hideNoData: PropTypes.bool,
    };

    static defaultProps = {
        titleGutterTheme: 'grey',
        border: false,
        hideNoData: false,
    };

    renderHead() {
        const {config, thClassName} = this.props;
        return (
            <thead>
                <tr>
                    {config.map(({title, key, align: textAlign, width}) => {
                        const style = {
                            textAlign,
                            width,
                        }
                        return (
                            <th key={`th-${key}`} className={thClassName}
                                style={style}>
                                <b>{title}</b>
                            </th>
                        );
                    })}
                </tr>
            </thead>
        );
    }

    renderBody() {
        const {config, data, rowKey, tdClassName, hideNoData} = this.props;
        const hasData = Array.isArray(data) && data.length > 0;
        let cells = [];
        if (hasData) {
            const renderKeys = [];
            const configMap = {};
            config.forEach((c) => {
                renderKeys.push(c.key);
                configMap[c.key] = c;
            });
            cells = data.map((item, i) => {
                const rk = item[rowKey] || i;
                return (
                    <tr key={`tr-${rk}`} className={'tr'}>
                        {renderKeys.map((k) => {
                            const conf = configMap[k];
                            const {align: textAlign, width} = conf || {};
                            const style = {
                                textAlign,
                                width
                            };
                            let cell = getValueByObjectKey(k, item);
                            if (conf.render) {
                                cell = conf.render(item);
                            }
                            return (
                                <td key={`td-${rk}-${k}`} className={tdClassName}
                                    style={style}>
                                    {cell}
                                </td>
                            );
                        })}
                    </tr>
                );
            });
        } else {
            if (!hideNoData) {
                cells.push(this.renderNoData());
            }
        }
        return (
            <tbody>
                {cells}
            </tbody>
        );
    }


    renderNoData() {
        const {config} = this.props;
        return (
            <tr key='tr-no-data'>
                <td colSpan={config.length}>
                    <div className={'no-data'}>
                        暂无数据
                    </div>
                </td>
            </tr>
        );
    }

    render() {
        const { className, config, border, titleGutterTheme } = this.props;
        if (!config) {
            return null;
        }
        return (
            <table className={ss('custom-table', className, `title-gutter-${titleGutterTheme}`, {border})}>
                {this.renderHead()}
                {this.renderBody()}
            </table>
        )
    }
}

export default Table;