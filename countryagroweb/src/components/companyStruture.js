import React from 'react';
import { AnimatedTree } from 'react-tree-graph';
import './companyStructure.css';

const data = {
	name: 'Managing Director',
	children: [ {
		name: 'Administration'
	},{
		name: 'Operations',
        children: [{
            name: 'Drivers'
        },{
            name: 'Assistant Drivers'
        }]
	},{
        name: 'Accountant'
    }]
};

export const CompanyStructure = () => {
    return (
      <div className='companyStructureComponent'>
      <h2>Company Structure</h2>
        <div className='companyStructureTree'>
        <AnimatedTree
        data={data}
        height={400}
        width={500}
        nodeShape={'rect'}
        svgProps={{
            transform: 'rotate(90)'
        }}
        />
        </div>
      </div>
    );
  }