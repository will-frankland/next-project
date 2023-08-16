"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import From from '@components/Form';

const CreatePrompt = () => {
  const [ submitting, setSubmitting ] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {

  };

  return (
   <Form />
  )
}

export default CreatePrompt;