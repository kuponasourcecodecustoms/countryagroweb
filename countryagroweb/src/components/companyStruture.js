import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import './companyStructure.css';


const OrganisationStructure = () => (
  <Tree  
    lineWidth={'2px'}
    lineColor={'#fc9c05'}
    lineBorderRadius={'8px'}
    lineHeight={'24px'}
  label={<div className='treeNode'>Managing Director</div>}>
    <TreeNode label={<div className='treeNode'>Administration</div>}/>
    <TreeNode label={<div className='treeNode'>Operations</div>}>
    <TreeNode label={<div className='treeNode'>Drivers</div>}/>
    <TreeNode label={<div className='treeNode'>Assistant Drivers</div>}/>
    </TreeNode>
      <TreeNode label={<div className='treeNode'>Operations</div>} />
  </Tree>)


export const CompanyStructure = () => {
    return (
      <div className='companyStructureComponent'>
      <h2>Company Structure</h2>
        <div className='companyStructureTree'>
        <OrganisationStructure/>
      </div>
      </div>
    );
  }