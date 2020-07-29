import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';

function NewVideo() {
  return (
    <PageTemplate>
      <Link to="/categories/new">Nova categoria</Link>
    </PageTemplate>
  );
}

export default NewVideo;
