import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  selectedFile: File;
  result: any;
  fileData: any = {};
  filename: string = ""


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.filename = this.selectedFile.name
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.result = fileReader.result
      this.fileData = JSON.parse(this.result)
    }
    fileReader.readAsText(this.selectedFile);
  }

}
