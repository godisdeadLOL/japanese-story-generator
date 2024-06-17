// import Header from "pages/Base/Header";

import Header from "./pages/Base/Header";
import Content from "./components/Content";
import StoryForm from "./pages/Base/StoryForm";
import StoryResult from "./pages/Base/StoryResult";

import { useState } from "preact/hooks";

import * as Story from '@/api/story';

import useFormFields from "./hooks/useFormFields";

const App = () => {
  const form = useFormFields({ level: 'Novice', notes: '', sentences: 3 })

  const [mode, setMode] = useState('form') // form -> generate -> result
  const [story, setStory] = useState('')

  const onSubmit = async (values) => {
    setMode('generate')
    setStory('')

    const { status, content } = await Story.generate(values)

    if (status) {
      setStory(content)
      setMode('result')
    } else {
      setMode('form')
    }
  }

  return (
    <>
      <Header />

      <Content>

        {mode === 'form' &&
          <StoryForm form={form} onSubmit={onSubmit} />
        }

        {mode !== 'form' &&
          <StoryResult loading={mode === 'generate'} story={story} onReturn={() => setMode('form')} />
        }

      </Content>

    </>
  );
};

export default App;
