import { useState } from 'react';

export function useSpeechRecognition() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  let speechRecognition: SpeechRecognition | null = null;

  const handleStartRecording = () => {
    const isSpeechRecognitionAPIAvailable =
      'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert('Infelizmente, seu navegador não suporta a API de gravação ☹️');
      return;
    }

    setIsRecording(true);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = 'pt-BR';
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, '');

      setTranscript(transcription);
    };

    speechRecognition.onerror = (error) => {
      console.log('👽 ~ error:', error);
    };

    speechRecognition.start();

    if (speechRecognition && isRecording) speechRecognition.stop();
  };

  const handleStopRecording = () => {
    setIsRecording(false);

    if (speechRecognition) speechRecognition.stop();
  };

  return {
    isRecording,
    transcript,
    handleStartRecording,
    handleStopRecording,
  };
}
