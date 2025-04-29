import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormErrorComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  imageFile!: File;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // onFileChange(event: Event) {
  //   const file = (event.target as HTMLInputElement)?.files?.[0];
  //   if (file) {
  //     this.imageFile = file;
  //     this.registerForm.patchValue({ image: file });
  //   }
  // }
  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.imageFile = file;
      this.registerForm.patchValue({ image: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log('Form Data:', this.registerForm.value);
    const formData = new FormData();
    formData.append('name', this.registerForm.get('name')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('image', this.registerForm.get('image')?.value);

    if (this.registerForm.valid) {
      this._auth.register(formData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Registration error:', error);
          // Handle registration error (e.g., show error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  logout() {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
