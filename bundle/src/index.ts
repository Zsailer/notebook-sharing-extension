import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { EventsListenerPlugin } from '@jupyter_sharing/events-listener-extension';
import { PublishNotebookPlugin } from '@jupyter_sharing/share-extension';
import { ViewSharedNotebooksPlugin } from '@jupyter_sharing/shared-extension';

const plugins: JupyterFrontEndPlugin<any>[] = [
  EventsListenerPlugin,
  PublishNotebookPlugin,
  ViewSharedNotebooksPlugin
];

export default plugins;